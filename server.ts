import cors = require('cors');
import express = require('express');
import serverless = require('serverless-http');
import { config } from 'dotenv';
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

// import routes
import adminRoute from './routes/admin';
import facultyRoute from './routes/faculty';
import studentRoute from './routes/student';

config();
const app = express();
const uri = process.env.MONGODB_URI || '';
const port = process.env.PORT || 5000;
const client = new MongoClient(uri);

const authorizeUser = (req: Request, res: Response, next: (err?: any) => any) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === `Bearer ${process.env.AUTH_TOKEN}`) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

app.set('mongodbClient', client);

app.use(express.json(), cors());
app.use(adminRoute, facultyRoute, studentRoute);

app.get('/', (req: Request, res: Response) => {
    res.send({ Msg: "Hello, this is base path!" });
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});

// For Serverless Computing
export const handler = serverless(app);