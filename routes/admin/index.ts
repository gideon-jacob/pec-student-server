import express = require('express');
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

router.post('/api/admin/createuser', (request: Request, response: Response) => {})

router.post('/api/login', (request: Request, response: Response) => { })

export default router;