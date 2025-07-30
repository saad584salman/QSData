import express from 'express';
import { body } from 'express-validator';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateProject = [
  body('name').notEmpty().withMessage('Project name is required'),
  body('parent_project_id').optional().custom((value) => {
    if (value === null || value === undefined) return true;
    return Number.isInteger(value) && value > 0;
  }).withMessage('Parent project ID must be a positive integer or null'),
  body('properties').optional().isArray().withMessage('Properties must be an array'),
  body('properties.*.property_definition_id').optional().isInt().withMessage('Property definition ID must be an integer'),
  body('properties.*.value_type').optional().isIn(['string', 'number', 'date', 'boolean']).withMessage('Invalid value type'),
  body('properties.*.value').optional().notEmpty().withMessage('Property value is required')
];

// Routes
router.get('/', auth, getProjects);
router.get('/:id', auth, getProjectById);
router.post('/', auth, validateProject, createProject);
router.put('/:id', auth, validateProject, updateProject);
router.delete('/:id', auth, deleteProject);

export default router; 