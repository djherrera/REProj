import express from 'express';
import { createUser } from '../controllers/userCntrl.js';
const router = express.Router();

// Specifying GET METHOD which is going to be a POST REQUEST
// to the endpoint of "register"
router.post("/register", createUser);

export {router as userRoute}