import express from 'express';
import { createUser } from '../controllers/userCntrl';
const router = express.router()

// Specifying GET METHOD which is going to be a POST Request
router.post("/register", createUser)