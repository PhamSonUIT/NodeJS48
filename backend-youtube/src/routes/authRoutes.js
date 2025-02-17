import express from 'express';
import { login, register } from '../controllers/authController.js';
import { forgotPassword } from '../controllers/authController.js';
import { resetPassword } from '../controllers/authController.js';
const authRouter = express.Router();

// đăng kí
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password', resetPassword);

export default authRouter;