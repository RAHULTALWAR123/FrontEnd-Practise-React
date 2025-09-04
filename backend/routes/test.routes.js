import express from 'express';
import { signUp } from '../controllers/test.controller.js';

const router = express.Router();

router.post('/auth/signup',signUp);

export default router;