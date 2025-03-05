const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const serverless = require('serverless-http');

require('dotenv').config();
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
const client = new MongoClient(uri);

app.use(express.json(), cors());

app.get('/', (req, res) => {
    res.send({Msg: "Hello, this is base path!"})
})

app.get('/api/timetable', async (req, res) => { 
    await client.connect()

    const pecStudentDB = client.db('pec-student')
    const subjectCollection = pecStudentDB.collection('subject');
    const classCollection = pecStudentDB.collection('classes');
    const studentCollection = pecStudentDB.collection('student');

    const studentDetails = await studentCollection.findOne({ studentId: '11142301CS04169' }, { projection: { _id: 0 } })

    const { classId } = studentDetails
    const classDetails = await classCollection.findOne({ classId }, { projection: { _id: 0 } })

    const { facultyDetailsList } = classDetails
    const subjectIdList = facultyDetailsList.map(details => details.subjectId)
    const subjectDetailsList = await subjectCollection.find(
        { subjectId: { $in: subjectIdList } },
        { projection: { _id: 0 } }
    ).toArray();

    const { timetableList } = classDetails
    const formattedTimetableList = timetableList.map(timetable => {
        const { subjectId } = timetable

        const subjectDetails = subjectDetailsList.find(eachSubject => {
            return (eachSubject.subjectId === subjectId)
        }) 

        if (subjectDetails == undefined) {
            throw new Error('Subject details not found')
        }

        const { facultyName } = facultyDetailsList.find(faculty => {
            return faculty.subjectId === subjectId
        })

        if (facultyName == undefined) {
            throw new Error('Faculty details not found')
        }
        
        const attendanceInfo = studentDetails.attendanceDetailsList.find(eachSubject => {
            return (eachSubject.subjectId === subjectId)
        })
        
        if (attendanceInfo == undefined) {
            throw new Error('Attendance information not found')
        }

        const { attendancePercentage } = attendanceInfo
        
        return ({
            day: timetable.day,
            slotNumber: timetable.slotNumber,
            subjectCode: subjectDetails.subjectCode,
            subjectName: subjectDetails.subjectName,
            subjectType: subjectDetails.subjectType,
            facultyName,
            attendancePercentage
        })
    })
    
    res.send({timetable: formattedTimetableList})

    await client.close()
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});

// For Serverless Computing
module.exports.handler = serverless(app);
