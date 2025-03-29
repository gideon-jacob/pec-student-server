import express = require('express');
import { Request, Response } from 'express';
import { addDays, startOfWeek } from 'date-fns';
import { MongoClient } from 'mongodb';

import { weekDays, stringifyDate } from './constants';

import {
    StudentDetails,
    ClassDetails,
    ExamDetails,
    EventDetails,
    SubjectDetails, 
    FacultyDetails
} from '../../data';

const router = express.Router();

router.get('/api/student/timetable', async (request: Request, response: Response) => {
    interface TimetableRequestBody {
        semester: string;
        startDate: string;
        endDate: string;
    }

    const { semester, startDate, endDate } = request.body as TimetableRequestBody;
    const [userId, userType] = ["11142301CS04169", "student"]; //REVIEW 

    if (userType !== "student") {
        response
            .status(403)
            .send({ error: 'Access denied' });
        return;
    }

    const parsedStartDate = new Date(startDate);

    // Handling incorrect date values
    if (stringifyDate(startOfWeek(parsedStartDate)) !== startDate) {
        response
            .status(400)
            .send({ error: 'Start date must be a Sunday' });
        return;
    }

    if (stringifyDate(addDays(parsedStartDate, 6)) !== endDate) {
        response
            .status(400)
            .send({ error: 'End date must be the Saturday of the same week as the start date' });
        return;
    }

    const client = request.app.get('mongodbClient') as MongoClient;
    await client.connect();

    const pecStudentDB = client.db('pec-student');
    const studentCollection = pecStudentDB.collection('studentV1');
    const classCollection = pecStudentDB.collection('classV1');
    const examCollection = pecStudentDB.collection('examV1');
    const eventCollection = pecStudentDB.collection('eventV1');
    const subjectCollection = pecStudentDB.collection('subjectV1');
    const facultyCollection = pecStudentDB.collection('facultyV1');

    // Get student details
    // @ts-ignore
    const studentDetails = await studentCollection.findOne({ _id: '11142301CS04169' }) as unknown as StudentDetails;

    if (!studentDetails) {
        response
            .status(404)
            .send({ error: 'Student details not found' });
        return;
    }

    // Get student's class details
    const { semesterDetailsObject } = studentDetails as StudentDetails;
    const currentSemesterDetails = semesterDetailsObject[semester];

    if (!currentSemesterDetails) {
        response
            .status(404)
            .send({ error: 'Semester details not found' });
        return;
    }

    const { classId } = currentSemesterDetails;
    // @ts-ignore
    const classDetails = await classCollection.findOne({ _id: classId }) as unknown as ClassDetails;

    if (!classDetails) {
        response
            .status(404)
            .send({ error: 'Class details not found' });
        return;
    }

    // Get subject details of student's class
    const { subjectRecordsList } = classDetails;
    const subjectIdList = subjectRecordsList.map(each => each.subjectId)
    // @ts-ignore
    const subjectDetailsList = await subjectCollection.find({ _id: { $in: subjectIdList } }).toArray() as unknown as SubjectCollection[];
    
    let facultyIdList: number[] = [];
    for (const eachSubjectRecord of subjectRecordsList) {
        for (const facultyId of eachSubjectRecord.facultyIdList) {
            if (!facultyIdList.includes(facultyId)) {
                facultyIdList.push(facultyId);
            }
        }
    }

    // @ts-ignore
    const facultyDetailsList = await facultyCollection.find({ _id: { $in: facultyIdList } }).toArray() as unknown as FacultyDetails[];

    const formattedSubjectRecordsList = subjectRecordsList.map(each => {
        const { subjectId, facultyIdList, attendanceRecord } = each;

        let facultyNameList: string[] = [];
        for (const facultyId of facultyIdList) {
            const facultyDetails = facultyDetailsList.find(each => each._id === facultyId);
            
            if (studentDetails.departmentName === facultyDetails?.departmentName) {
                facultyNameList.push(facultyDetails.facultyName);
            }
            else if (facultyDetails !== undefined) {
                facultyNameList.push(`${facultyDetails.facultyName} (${facultyDetails.departmentName})`);
            }
        }

        const presentRecords = attendanceRecord?.filter(each =>
            !each.absentStudentList.includes(userId)
        );


        let attendancePercentage;
        if (attendanceRecord === undefined || presentRecords === undefined) { 
            attendancePercentage = -1;
        }
        else if (attendanceRecord.length === 0) {
            attendancePercentage = 0;
        }
        else {
            attendancePercentage = Math.round((presentRecords.length / attendanceRecord.length) * 100);
        }
        
        return {
            subjectId,
            facultyNameList, 
            attendancePercentage
        };
    });

    const eventDetailsList = await eventCollection.find({ exclusiveList: userId }).toArray() as unknown as EventDetails[];
    const initialExamDetailsList = await examCollection.find({
        classIdList: classId,
        $and: [
            { date: { $lte: endDate } },
            { date: { $gte: startDate } }
        ]
    }).toArray() as unknown as ExamDetails[];
    const examDetailsList = initialExamDetailsList.filter(each => {
        const { exclusiveList } = each;
        return exclusiveList.length === 0 || exclusiveList.includes(userId);
    });

    interface ExamSlot {
        day: string;
        slotNumber: number;
        recordType: string;
        examCode: string;
        examName: string;
        roomNumber: string;
        blockName: string;
        startTime: string;
        endTime: string;
    }

    interface EventSlot {
        day: string;
        slotNumber: number;
        recordType: string;
        eventCode: string;
        eventName: string;
        organisedBy: string;
        venue: string;
        startTime: string;
        endTime: string;
    }

    interface SubjectSlot {
        day: string;
        slotNumber: number;
        recordType: string;
        subjectCode: string;
        subjectName: string;
        facultyNameList: string[];
        attendancePercentage: number;
    }
        
    let finalTimetableList: (ExamSlot | EventSlot | SubjectSlot)[] = [];
    const { examSeatingDetailsList } = currentSemesterDetails;
    const {
        timetableList,
        oldTimetableList,
        holidayList,
        rescheduleDaysList,
        semesterStartDate,
        semesterEndDate
    } = classDetails

    for (
        let i = 0, dateIter = new Date(startDate);
        i < 7;
        i += 1, dateIter = addDays(dateIter, 1)
    ) {
        const thisDate = stringifyDate(dateIter);
        const thisDay = weekDays[i];
        
        if (thisDate < semesterStartDate || thisDate > semesterEndDate) {
            continue;
        }

        const todaysExamList = examDetailsList.filter(each => each.date === thisDate);
        for (const eachExam of todaysExamList) {
            const {
                _id: examId,
                slotNumberList,
                recordType,
                examName,
                subjectId,
                startTime, 
                endTime
            } = eachExam

            let roomNumber = "Not Assigned", blockName = "Not Assigned";
            const seatingDetails = examSeatingDetailsList.find(each => each.examId === examId)
            
            if (seatingDetails !== undefined) {
                roomNumber = seatingDetails.roomNumber;
                blockName = seatingDetails.blockName;
            }
            
            let subjectDetails = subjectDetailsList.find(each => each._id === subjectId)
            if (!subjectDetails) {
                // @ts-ignore
                subjectDetails = await subjectCollection.findOne({ _id: subjectId }) as unknown as SubjectDetails;
            }
            const { subjectName } = subjectDetails
            
            for (const eachSlot of slotNumberList) {
                finalTimetableList.push({
                    day: thisDay,
                    slotNumber: eachSlot,
                    recordType,
                    examCode: examName,
                    examName: subjectName,
                    roomNumber,
                    blockName,
                    startTime,
                    endTime
                });
            }
        }

        const todaysEventList = eventDetailsList.filter(each => each.date === thisDate);
        for (const eachEvent of todaysEventList) {
            const {
                _id: eventId,
                slotNumberList,
                recordType,
                eventCode,
                eventName,
                organisedBy,
                venue,
                startTime, 
                endTime
            } = eachEvent

            for (const eachSlot of slotNumberList) {
                finalTimetableList.push({
                    day: thisDay,
                    slotNumber: eachSlot,
                    recordType,
                    eventCode,
                    eventName,
                    organisedBy,
                    venue,
                    startTime,
                    endTime
                });
            }
        } 

        if (holidayList.includes(thisDate)) {
            continue;
        }

        const rescheduleDetails = rescheduleDaysList.find(each => each.date === thisDate);
        const isTodayReschedule = rescheduleDetails !== undefined;
        
        const oldTimetableDetails = oldTimetableList.find(each => thisDate <= each.endDate);
        const isOldTimetableAvailable = oldTimetableDetails !== undefined;
        let filteredTimetableList;

        if (isTodayReschedule) {
            const { day: rescheduleDay } = rescheduleDetails;
            filteredTimetableList = (isOldTimetableAvailable) ? (
                oldTimetableDetails.timetableList.filter(each => each.day === rescheduleDay)
            ) : (
                timetableList.filter(each => each.day === rescheduleDay)
            );
        }
        else {
            const currentTimetableList = (isOldTimetableAvailable) ? oldTimetableDetails.timetableList : timetableList;
            filteredTimetableList = currentTimetableList.filter(each => each.day === thisDay);
        }

        for (const eachSlot of filteredTimetableList) {
            const { slotNumber, subjectId } = eachSlot;
            const existingSlotIndex = finalTimetableList.findIndex(each =>
                each.slotNumber === slotNumber && each.day === thisDay
            );
            const isSlotFull = existingSlotIndex !== -1;
            
            if (isSlotFull === true) {
                continue;
            }
            
            const subjectDetails = subjectDetailsList.find(each => each._id === subjectId);
            if (!subjectDetails) {
                console.error("Subject details not found");
                continue;
            }
            const { subjectType, subjectCode, subjectName } = subjectDetails;
            
            const subjectRecordDetails = formattedSubjectRecordsList.find(each => each.subjectId === subjectId);
            if (!subjectRecordDetails) {
                console.error("Subject details not found in Class subject record");
                continue;
            }
            const { facultyNameList, attendancePercentage } = subjectRecordDetails;
            
            finalTimetableList.push({
                day: thisDay,
                slotNumber,
                recordType: subjectType,
                subjectCode,
                subjectName,
                facultyNameList,
                attendancePercentage
            });
        }
    }
    
    response.send({
        timetableList: finalTimetableList,
        semesterStartDate,
        semesterEndDate
    });

    await client.close();
});

router.get('/api/student/performance', (request: Request, response: Response) => {
    response.send({ Msg: "API is under developemnet." })
});

export default router;