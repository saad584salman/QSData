import { Router } from 'express';
import { body } from 'express-validator';
import * as controller from '../controllers/authController.js';
const router = Router();
// Validation middleware
const validateLogin = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
];
const validateRegister = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];
router.post('/login', validateLogin, controller.login);
router.post('/register', validateRegister, controller.register);
export default router;
