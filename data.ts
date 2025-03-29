interface SemesterDetails {
  classId: number;
  subjectPerformanceDetailsList: {
      subjectId: number;
      performanceDetailsList: {
          title: string;
          status: string;
          grantedScore: number;
          totalScore: number;
      }[];
  }[];
  examSeatingDetailsList: {
      examId: number;
      roomNumber: string;
      blockName: string;
  }[];
}

export interface StudentDetails {
  _id: string;
  batch: string;
  degreeName: string;
  departmentName: string;
  semesterDetailsObject: { [key: string]: SemesterDetails };
}

export const studentDetailsList: StudentDetails[] = [
    {
      "_id": "11142301CS04169",
      "batch": "2023-27", 
      "degreeName": "B.E.",
      "departmentName": "CSE",
      "semesterDetailsObject": {
          "4": {
              "classId": 1,
              "subjectPerformanceDetailsList": [
                  {
                      "subjectId": 1,
                      "performanceDetailsList": [
                          {
                              "title": "Assignment - 1",
                              "status": "Submitted", // or "Not submitted"
                              "grantedScore": 8,
                              "totalScore": 10
                          },
                          {
                              "title": "IAT - 1",
                              "status": "Present", // or "Absent"
                              "grantedScore": 38,
                              "totalScore": 50
                          },
                      ]
                  }
              ],
              "examSeatingDetailsList": [
                  {
                      "examId": 1,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  },
                  {
                      "examId": 2,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  },
                  {
                      "examId": 3,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  },
                  {
                      "examId": 4,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  },
                  {
                      "examId": 5,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  },
                  {
                      "examId": 6,
                      "roomNumber": "MCS-10",
                      "blockName": "AI & DS Block"
                  }
              ]
          }
      }
    }
]

export interface ClassDetails {
  _id: number;
  className: string;
  batch: string;
  academicYear: number;
  semester: number;
  semesterStartDate: string;
  semesterEndDate: string;
  subjectRecordsList: {
    subjectId: number;
    facultyIdList: number[];
    attendanceRecord?: {
      date: string;
      slotNumber: number;
      absentStudentList: string[];
      onDutyList: string[];
    }[];
  }[];
  timetableList: {
    day: string;
    slotNumber: number;
    subjectId: number;
  }[];
  oldTimetableList: {
    endDate: string;
    timetableList: {
      day: string;
      slotNumber: number;
      subjectId: number;
    }[];
  }[];
  holidayList: string[];
  rescheduleDaysList: {
    date: string;
    day: string;
  }[];
}

export const classDetailsList: ClassDetails[] = [
  {
    "_id": 1,
    "className": "CSE-A",
    "batch": "2023-27",
    "academicYear": 2,
    "semester": 4,
    "semesterStartDate": "2025-01-20",
    "semesterEndDate": "2025-06-13",
    "subjectRecordsList": [
      {
        "subjectId": 1,
        "facultyIdList": [
          1
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 2,
        "facultyIdList": [
          2
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 3,
        "facultyIdList": [
          3
        ],
        "attendanceRecord": [
          {
            "date": "2025-01-20",
            "slotNumber": 6,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04008",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04048",
              "11142301CS04049",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-21",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04048",
              "11142301CS04049",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-22",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04008",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04048",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-23",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04010",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04032",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04048",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-31",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04009",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04042",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-04",
            "slotNumber": 3,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04012",
              "11142301CS04021",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04051",
              "11142301CS04055",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-05",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04003",
              "11142301CS04021",
              "11142301CS04036",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-07",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04021",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-12",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04021",
              "11142301CS04025",
              "11142301CS04042",
              "11142301CS04169"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04015"
            ]
          },
          {
            "date": "2025-02-13",
            "slotNumber": 6,
            "absentStudentList": [
              "11142301CS04021",
              "11142301CS04042",
              "11142301CS04169"
            ],
            "onDutyList": [
              "11142301CS04025",
              "11142301CS04037",
              "11142301CS04040",
              "11142301CS04041",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-02-14",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04007",
              "11142301CS04011",
              "11142301CS04037",
              "11142301CS04042",
              "11142301CS04169"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04033",
              "11142301CS04038",
              "11142301CS04039",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-02-18",
            "slotNumber": 8,
            "absentStudentList": [
              "11142301CS04007",
              "11142301CS04011",
              "11142301CS04022",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04015",
              "11142301CS04020",
              "11142301CS04021",
              "11142301CS04032",
              "11142301CS04039",
              "11142301CS04048",
              "11142301CS04055"
            ]
          },
          {
            "date": "2025-02-19",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04003",
              "11142301CS04011",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04055"
            ]
          },
          {
            "date": "2025-02-21",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04003",
              "11142301CS04005",
              "11142301CS04007",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04008",
              "11142301CS04017",
              "11142301CS04020",
              "11142301CS04021",
              "11142301CS04032",
              "11142301CS04041"
            ]
          },
          {
            "date": "2025-02-25",
            "slotNumber": 3,
            "absentStudentList": [
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04023",
              "11142301CS04025",
              "11142301CS04031",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-26",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04031",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-28",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04041",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-03-03",
            "slotNumber": 6,
            "absentStudentList": [
              "11142301CS04002",
              "11142301CS04003",
              "11142301CS04008",
              "11142301CS04009",
              "11142301CS04012",
              "11142301CS04014",
              "11142301CS04016",
              "11142301CS04018",
              "11142301CS04020",
              "11142301CS04022",
              "11142301CS04024",
              "11142301CS04026",
              "11142301CS04028",
              "11142301CS04029",
              "11142301CS04032",
              "11142301CS04033",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04046",
              "11142301CS04050",
              "11142301CS04051",
              "11142301CS04054",
              "11142301CS04169"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-03-04",
            "slotNumber": 3,
            "absentStudentList": [
              "11142301CS04002",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04008",
              "11142301CS04013",
              "11142301CS04022",
              "11142301CS04027",
              "11142301CS04036"
            ],
            "onDutyList": [
              "11142301CS04001",
              "11142301CS04039",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-03-05",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04022"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-12",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-14",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04003",
              "11142301CS04005",
              "11142301CS04007",
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04031",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04047",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-14",
            "slotNumber": 6,
            "absentStudentList": [
              "11142301CS04003",
              "11142301CS04005",
              "11142301CS04007",
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04023",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-17",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04009",
              "11142301CS04011",
              "11142301CS04022",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04051"
            ],
            "onDutyList": []
          }
        ]
      },
      {
        "subjectId": 4,
        "facultyIdList": [
          4
        ],
        "attendanceRecord": [
          {
            "date": "2025-01-20",
            "slotNumber": 6,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04008",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-21",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04048",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-22",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04004",
              "11142301CS04005",
              "11142301CS04010",
              "11142301CS04013",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04031",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-23",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04010",
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04030",
              "11142301CS04032",
              "11142301CS04041",
              "11142301CS04042",
              "11142301CS04043",
              "11142301CS04044",
              "11142301CS04045",
              "11142301CS04046",
              "11142301CS04047",
              "11142301CS04049",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-01-24",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04015",
              "11142301CS04017",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04027",
              "11142301CS04029",
              "11142301CS04032",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04042",
              "11142301CS04034",
              "11142301CS04045",
              "11142301CS04052"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-10",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04001",
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04021",
              "11142301CS04025",
              "11142301CS04031",
              "11142301CS04036",
              "11142301CS04036",
              "11142301CS04051",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-12",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04021",
              "11142301CS04025",
              "11142301CS04042",
              "11142301CS04044",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-13",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04042",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-17",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04009",
              "11142301CS04011",
              "11142301CS04022",
              "11142301CS04024",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04051",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-18",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04005",
              "11142301CS04011",
              "11142301CS04022",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04008",
              "11142301CS04015",
              "11142301CS04020",
              "11142301CS04021",
              "11142301CS04032",
              "11142301CS04039",
              "11142301CS04048",
              "11142301CS04055",
              "11142301CS04169"
            ]
          },
          {
            "date": "2025-02-19",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04003",
              "11142301CS04011",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04008",
              "11142301CS04015",
              "11142301CS04020",
              "11142301CS04032",
              "11142301CS04039",
              "11142301CS04048",
              "11142301CS04055",
              "11142301CS04169"
            ]
          },
          {
            "date": "2025-02-20",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04023",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04051",
              "11142301CS04169"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-24",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04007",
              "11142301CS04013",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04036",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-25",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-25",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04009",
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04037",
              "11142301CS04044"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-02-26",
            "slotNumber": 4,
            "absentStudentList": [
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04046"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-02-26",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04018",
              "11142301CS04022",
              "11142301CS04025",
              "11142301CS04026",
              "11142301CS04031",
              "11142301CS04037",
              "11142301CS04044",
              "11142301CS04046"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-02-27",
            "slotNumber": 2,
            "absentStudentList": [
              "11142301CS04010",
              "11142301CS04018",
              "11142301CS04021",
              "11142301CS04022",
              "11142301CS04024",
              "11142301CS04026",
              "11142301CS04034",
              "11142301CS04041",
              "11142301CS04044",
              "11142301CS04046"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04017",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-03-03",
            "slotNumber": 1,
            "absentStudentList": [
              "11142301CS04002",
              "11142301CS04003",
              "11142301CS04008",
              "11142301CS04009",
              "11142301CS04012",
              "11142301CS04013",
              "11142301CS04014",
              "11142301CS04016",
              "11142301CS04018",
              "11142301CS04021"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04047",
              "11142301CS04048"
            ]
          },
          {
            "date": "2025-03-04",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04002",
              "11142301CS04005"
            ],
            "onDutyList": [
              "11142301CS04004",
              "11142301CS04009",
              "11142301CS04028",
              "11142301CS04031",
              "11142301CS04039"
            ]
          },
          {
            "date": "2025-03-05",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04009"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-11",
            "slotNumber": 4,
            "absentStudentList": [
              "11142301CS04022",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-11",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04022",
              "11142301CS04037"
            ],
            "onDutyList": []
          },
          {
            "date": "2025-03-12",
            "slotNumber": 5,
            "absentStudentList": [
              "11142301CS04022",
              "11142301CS04169"
            ],
            "onDutyList": []
          }
        ]
      },
      {
        "subjectId": 5,
        "facultyIdList": [
          5
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 6,
        "facultyIdList": [
          6
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 7,
        "facultyIdList": [
          1,
          7
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 8,
        "facultyIdList": [
          2,
          8
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 9,
        "facultyIdList": [
          3,
          8
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 10,
        "facultyIdList": [
          4,
          9
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 11,
        "facultyIdList": [
          10,
          11
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 12,
        "facultyIdList": [
          12,
          4
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 13,
        "facultyIdList": [
          4
        ],
        "attendanceRecord": []
      },
      {
        "subjectId": 14,
        "facultyIdList": [
          1
        ]
      },
      {
        "subjectId": 15,
        "facultyIdList": [
          13,
          1
        ]
      }
    ],
    "timetableList": [
      {
        "day": "Monday",
        "slotNumber": 1,
        "subjectId": 4
      },
      {
        "day": "Monday",
        "slotNumber": 2,
        "subjectId": 1
      },
      {
        "day": "Monday",
        "slotNumber": 3,
        "subjectId": 7
      },
      {
        "day": "Monday",
        "slotNumber": 4,
        "subjectId": 7
      },
      {
        "day": "Monday",
        "slotNumber": 5,
        "subjectId": 7
      },
      {
        "day": "Monday",
        "slotNumber": 6,
        "subjectId": 5
      },
      {
        "day": "Monday",
        "slotNumber": 7,
        "subjectId": 2
      },
      {
        "day": "Monday",
        "slotNumber": 8,
        "subjectId": 14
      },
      {
        "day": "Tuesday",
        "slotNumber": 1,
        "subjectId": 6
      },
      {
        "day": "Tuesday",
        "slotNumber": 2,
        "subjectId": 5
      },
      {
        "day": "Tuesday",
        "slotNumber": 3,
        "subjectId": 3
      },
      {
        "day": "Tuesday",
        "slotNumber": 4,
        "subjectId": 2
      },
      {
        "day": "Tuesday",
        "slotNumber": 5,
        "subjectId": 4
      },
      {
        "day": "Tuesday",
        "slotNumber": 6,
        "subjectId": 1
      },
      {
        "day": "Tuesday",
        "slotNumber": 7,
        "subjectId": 12
      },
      {
        "day": "Tuesday",
        "slotNumber": 8,
        "subjectId": 12
      },
      {
        "day": "Wednesday",
        "slotNumber": 1,
        "subjectId": 3
      },
      {
        "day": "Wednesday",
        "slotNumber": 2,
        "subjectId": 11
      },
      {
        "day": "Wednesday",
        "slotNumber": 3,
        "subjectId": 11
      },
      {
        "day": "Wednesday",
        "slotNumber": 4,
        "subjectId": 1
      },
      {
        "day": "Wednesday",
        "slotNumber": 5,
        "subjectId": 4
      },
      {
        "day": "Wednesday",
        "slotNumber": 6,
        "subjectId": 6
      },
      {
        "day": "Wednesday",
        "slotNumber": 7,
        "subjectId": 9
      },
      {
        "day": "Wednesday",
        "slotNumber": 8,
        "subjectId": 9
      },
      {
        "day": "Thursday",
        "slotNumber": 1,
        "subjectId": 5
      },
      {
        "day": "Thursday",
        "slotNumber": 2,
        "subjectId": 4
      },
      {
        "day": "Thursday",
        "slotNumber": 3,
        "subjectId": 13
      },
      {
        "day": "Thursday",
        "slotNumber": 4,
        "subjectId": 13
      },
      {
        "day": "Thursday",
        "slotNumber": 5,
        "subjectId": 2
      },
      {
        "day": "Thursday",
        "slotNumber": 6,
        "subjectId": 6
      },
      {
        "day": "Thursday",
        "slotNumber": 7,
        "subjectId": 15
      },
      {
        "day": "Thursday",
        "slotNumber": 8,
        "subjectId": 15
      },
      {
        "day": "Friday",
        "slotNumber": 1,
        "subjectId": 1
      },
      {
        "day": "Friday",
        "slotNumber": 2,
        "subjectId": 3
      },
      {
        "day": "Friday",
        "slotNumber": 3,
        "subjectId": 10
      },
      {
        "day": "Friday",
        "slotNumber": 4,
        "subjectId": 10
      },
      {
        "day": "Friday",
        "slotNumber": 5,
        "subjectId": 2
      },
      {
        "day": "Friday",
        "slotNumber": 6,
        "subjectId": 5
      },
      {
        "day": "Friday",
        "slotNumber": 7,
        "subjectId": 8
      },
      {
        "day": "Friday",
        "slotNumber": 8,
        "subjectId": 8
      }
    ],
    "oldTimetableList": [
      {
        "endDate": "2025-02-05",
        "timetableList": [
          {
            "day": "Monday",
            "slotNumber": 1,
            "subjectId": 4
          },
          {
            "day": "Monday",
            "slotNumber": 2,
            "subjectId": 1
          },
          {
            "day": "Monday",
            "slotNumber": 3,
            "subjectId": 7
          },
          {
            "day": "Monday",
            "slotNumber": 4,
            "subjectId": 7
          },
          {
            "day": "Monday",
            "slotNumber": 5,
            "subjectId": 7
          },
          {
            "day": "Monday",
            "slotNumber": 6,
            "subjectId": 5
          },
          {
            "day": "Monday",
            "slotNumber": 7,
            "subjectId": 2
          },
          {
            "day": "Monday",
            "slotNumber": 8,
            "subjectId": 14
          },
          {
            "day": "Tuesday",
            "slotNumber": 1,
            "subjectId": 6
          },
          {
            "day": "Tuesday",
            "slotNumber": 2,
            "subjectId": 5
          },
          {
            "day": "Tuesday",
            "slotNumber": 3,
            "subjectId": 3
          },
          {
            "day": "Tuesday",
            "slotNumber": 4,
            "subjectId": 2
          },
          {
            "day": "Tuesday",
            "slotNumber": 5,
            "subjectId": 4
          },
          {
            "day": "Tuesday",
            "slotNumber": 6,
            "subjectId": 1
          },
          {
            "day": "Tuesday",
            "slotNumber": 7,
            "subjectId": 12
          },
          {
            "day": "Tuesday",
            "slotNumber": 8,
            "subjectId": 12
          },
          {
            "day": "Wednesday",
            "slotNumber": 1,
            "subjectId": 3
          },
          {
            "day": "Wednesday",
            "slotNumber": 2,
            "subjectId": 11
          },
          {
            "day": "Wednesday",
            "slotNumber": 3,
            "subjectId": 11
          },
          {
            "day": "Wednesday",
            "slotNumber": 4,
            "subjectId": 1
          },
          {
            "day": "Wednesday",
            "slotNumber": 5,
            "subjectId": 4
          },
          {
            "day": "Wednesday",
            "slotNumber": 6,
            "subjectId": 6
          },
          {
            "day": "Wednesday",
            "slotNumber": 7,
            "subjectId": 9
          },
          {
            "day": "Wednesday",
            "slotNumber": 8,
            "subjectId": 9
          },
          {
            "day": "Thursday",
            "slotNumber": 1,
            "subjectId": 5
          },
          {
            "day": "Thursday",
            "slotNumber": 2,
            "subjectId": 4
          },
          {
            "day": "Thursday",
            "slotNumber": 3,
            "subjectId": 13
          },
          {
            "day": "Thursday",
            "slotNumber": 4,
            "subjectId": 13
          },
          {
            "day": "Thursday",
            "slotNumber": 5,
            "subjectId": 2
          },
          {
            "day": "Thursday",
            "slotNumber": 6,
            "subjectId": 6
          },
          {
            "day": "Thursday",
            "slotNumber": 7,
            "subjectId": 15
          },
          {
            "day": "Thursday",
            "slotNumber": 8,
            "subjectId": 15
          },
          {
            "day": "Friday",
            "slotNumber": 1,
            "subjectId": 1
          },
          {
            "day": "Friday",
            "slotNumber": 2,
            "subjectId": 3
          },
          {
            "day": "Friday",
            "slotNumber": 3,
            "subjectId": 10
          },
          {
            "day": "Friday",
            "slotNumber": 4,
            "subjectId": 10
          },
          {
            "day": "Friday",
            "slotNumber": 5,
            "subjectId": 2
          },
          {
            "day": "Friday",
            "slotNumber": 6,
            "subjectId": 5
          },
          {
            "day": "Friday",
            "slotNumber": 7,
            "subjectId": 8
          },
          {
            "day": "Friday",
            "slotNumber": 8,
            "subjectId": 8
          }
        ]
      }
    ],
    "holidayList": [
      "2025-02-11",
      "2025-03-31",
      "2025-04-14",
      "2025-05-01",
      "2025-05-10",
      "2025-05-11",
      "2025-05-12",
      "2025-05-13",
      "2025-05-14",
      "2025-05-15",
      "2025-05-16",
      "2025-05-17",
      "2025-05-18",
      "2025-05-19",
      "2025-05-20",
      "2025-05-21",
      "2025-05-22",
      "2025-05-23",
      "2025-05-24",
      "2025-05-25",
      "2025-05-26",
      "2025-05-27",
      "2025-05-28",
      "2025-05-29",
      "2025-05-30",
      "2025-05-31",
      "2025-06-01",
      "2025-06-02",
      "2025-06-03",
      "2025-06-04",
      "2025-06-05",
      "2025-06-06",
      "2025-06-07",
      "2025-06-08",
      "2025-06-09",
      "2025-06-10",
      "2025-06-11",
      "2025-06-12",
      "2025-06-13"
    ],
    "rescheduleDaysList": [
      {
        "date": "2025-01-25",
        "day": "Monday"
      }
    ]
  }
]


export interface EventDetails {
  _id: number;
  date: string;
  recordType: string;
  eventCode: string;
  eventName: string;
  slotNumberList: number[];
  organisedBy: string;
  venue: string;
  startTime: string;
  endTime: string;
  exclusiveList: string[];
}

export const eventDetailsList: EventDetails[] = [
    {
        "_id": 1,
        "date": "2025-03-07",
        "recordType": "event",
        "eventCode": "Workshop", // "Workshop" | "Guest Lecture" | "Seminar"
        "eventName": "Google Colab Workshop",
        "slotNumberList": [3, 4, 5],
        "organisedBy": "Google Developer Groups on Campus / Prathyusha Association of Computer Engineers",
        "venue": "APJ Abdhul Kalam Block",
        "startTime": "13:30",
        "endTime": "15:30",
        "exclusiveList": [
            '11142301CS04169',
            '11142301CS04026',
            '11142301CS04007'
        ],
    }
]


export interface ExamDetails {
  _id: number;
  classIdList: number[];
  recordType: string;
  date: string;
  examName: string;
  subjectId: number;
  slotNumberList: number[];
  startTime: string;
  endTime: string;
  exclusiveList: string[];
}

export const examDetailsList: ExamDetails[] = [
    {
        "_id": 1,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
    {
        "_id": 2,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
    {
        "_id": 3,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
    {
        "_id": 4,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
    {
        "_id": 5,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
    {
        "_id": 6,
        "classIdList": [1, 2, 3],
        "recordType": "exam",
        "date": "2025-03-05",
        "examName": "IAT-1",
        "subjectId": 6,
        "slotNumberList": [1, 2],
        "startTime": "8:35",
        "endTime": "10:05",
        "exclusiveList": []
    },
]


export interface SubjectDetails {
  _id: number;
  subjectCode: string;
  subjectName: string;
  subjectType: string;
}

export const subjectDetailsList: SubjectDetails[] = [
    {
      "_id": 1,
      "subjectCode": "CS23401",
      "subjectName": "Database Management Systems",
      "subjectType": "Theory"
    },
    {
      "_id": 2,
      "subjectCode": "CS23402",
      "subjectName": "Computer Networks",
      "subjectType": "Theory"
    },
    {
      "_id": 3,
      "subjectCode": "CS23403",
      "subjectName": "Operating Systems",
      "subjectType": "Theory"
    },
    {
      "_id": 4,
      "subjectCode": "CS23404",
      "subjectName": "Algorithms",
      "subjectType": "Theory"
    },
    {
      "_id": 5,
      "subjectCode": "CS23405",
      "subjectName": "Theory of Computation",
      "subjectType": "Theory"
    },
    {
      "_id": 6,
      "subjectCode": "GE23402",
      "subjectName": "Environmental Science and Sustainability",
      "subjectType": "Theory"
    },
    {
      "_id": 7,
      "subjectCode": "LCS23401",
      "subjectName": "Database Management Systems Laboratory",
      "subjectType": "Laboratory"
    },
    {
      "_id": 8,
      "subjectCode": "CS23402",
      "subjectName": "Computer Networks Laboratory",
      "subjectType": "Laboratory"
    },
    {
      "_id": 9,
      "subjectCode": "CS23403",
      "subjectName": "Operating Systems",
      "subjectType": "Laboratory"
    },
    {
      "_id": 10,
      "subjectCode": "CS23404",
      "subjectName": "Algorithms",
      "subjectType": "Laboratory"
    },
    {
      "_id": 11,
      "subjectCode": "EEC23401",
      "subjectName": "Advanced Aptitude Skills",
      "subjectType": "Activity"
    },
    {
      "_id": 12,
      "subjectCode": "MC23401",
      "subjectName": "NPTEL",
      "subjectType": "Activity"
    },
    {
      "_id": 13,
      "subjectCode": "EEC23402",
      "subjectName": "Mini Project - 1",
      "subjectType": "Activity"
    },
    {
      "_id": 14,
      "subjectCode": "LIBRARY",
      "subjectName": "Library",
      "subjectType": "Activity"
    },
    {
      "_id": 15,
      "subjectCode": "SPORTS",
      "subjectName": "Sports",
      "subjectType": "Activity"
    }
]


export interface FacultyDetails {
  _id: number;
  facultyName: string;
  departmentName: string;
}
  
export const facultyDetailsList: FacultyDetails[] = [
  {
    "_id": 1,
    "facultyName": "Ms. Raziya Begum",
    "departmentName": "CSE"
  },
  {
      "_id": 2,
      "facultyName": "Ms. S. Bhuvana",
      "departmentName": "Cyber Security"
  },
  {
      "_id": 3,
      "facultyName": "Ms. Avanthika Varshini",
      "departmentName": "CSE"
  },
  {
      "_id": 4,
      "facultyName": "Mrs. S. Pavithra",
      "departmentName": "CSE"
  },
  {
      "_id": 5,
      "facultyName": "Ms. R. Vaishnavi",
      "departmentName": "CSE"
  },
  {
      "_id": 6,
      "facultyName": "Dr. R. Prabakaran",
      "departmentName": "Chemistry"
  },
  {
      "_id": 7,
      "facultyName": "Mrs. B. Gunasundari",
      "departmentName": "CSE"
  },
  {
      "_id": 8,
      "facultyName": "Mr. I. Benjamin Jebaraj",
      "departmentName": "CSE"
  },
  {
      "_id": 9,
      "facultyName": "Ms. R. Lavanya",
      "departmentName": "CSE"
  },
  {
      "_id": 10,
      "facultyName": "Ms. Metilda Therbos",
      "departmentName": "English"
  },
  {
      "_id": 11,
      "facultyName": "Mr. Vairavasamy",
      "departmentName": "Mathematics"
  },
  {
      "_id": 12,
      "facultyName": "Ms. T. Dharanika",
      "departmentName": "CSE"
  },
  {
      "_id": 13,
      "facultyName": "Any faculty",
      "departmentName": "Physical Education"
  }
]
