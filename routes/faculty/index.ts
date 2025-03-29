import express = require('express');
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

// types of faculty
// - class incharge
// - mentor
// - subject handler

router.post('/api/faculty/class-incharge/exam-seating-arrangement', async (request: Request, response: Response) => { 
    response.send({
        Msg: "API is under development"
    });
});

router.post('/api/faculty/subject/student-performance', async (request: Request, response: Response) => { 
    response.send({
        Msg: "API is under development"
    });
});

router.get('/api/faculty/mentor/student/:studentId', async (request: Request, response: Response) => { 
    const { studentId } = request.params;
    if (!studentId) {
        response
            .status(400)
            .send({ error: "Student ID is required" });
        return;
    }

    response.send({
        Msg: `API is under development for student ID: ${studentId}`
    });
});

export default router;