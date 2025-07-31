import express from 'express';
import { body } from 'express-validator';
import { getTasks, getTaskById, createTask, updateTask, deleteTask, completeTask } from '../controllers/taskController.js';
import auth from '../middleware/auth.js';
const router = express.Router();
// Validation middleware
const validateTask = [
    body('task_rule_id').isInt().withMessage('Task rule ID must be an integer'),
    body('entity_type').notEmpty().withMessage('Entity type is required'),
    body('entity_id').isInt().withMessage('Entity ID must be an integer'),
    body('assigned_to_user_id').optional().isInt().withMessage('Assigned user ID must be an integer'),
    body('assigned_to_office_id').optional().isInt().withMessage('Assigned office ID must be an integer'),
    body('due_date').optional().isISO8601().withMessage('Due date must be a valid date')
];
const validateTaskUpdate = [
    body('assigned_to_user_id').optional().isInt().withMessage('Assigned user ID must be an integer'),
    body('assigned_to_office_id').optional().isInt().withMessage('Assigned office ID must be an integer'),
    body('due_date').optional().isISO8601().withMessage('Due date must be a valid date'),
    body('status').optional().isIn(['pending', 'completed', 'overdue']).withMessage('Invalid status'),
    body('notes').optional().isString().withMessage('Notes must be a string')
];
const validateTaskCompletion = [
    body('notes').optional().isString().withMessage('Notes must be a string')
];
// Routes
router.get('/', auth, getTasks);
router.get('/:id', auth, getTaskById);
router.post('/', auth, validateTask, createTask);
router.put('/:id', auth, validateTaskUpdate, updateTask);
router.delete('/:id', auth, deleteTask);
router.post('/:id/complete', auth, validateTaskCompletion, completeTask);
export default router;
