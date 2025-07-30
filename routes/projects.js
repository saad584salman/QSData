import express from 'express';
import { body } from 'express-validator';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

// Validation middleware
const validateProject = [
  body('name').notEmpty().withMessage('Project name is required'),
  body('parent_project_id').optional().isInt().withMessage('Parent project ID must be an integer'),
  body('properties').optional().isArray().withMessage('Properties must be an array'),
  body('properties.*.property_definition_id').optional().isInt().withMessage('Property definition ID must be an integer'),
  body('properties.*.value_type').optional().isIn(['string', 'number', 'date', 'boolean']).withMessage('Invalid value type'),
  body('properties.*.value').optional().notEmpty().withMessage('Property value is required')
];

// Routes
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', validateProject, createProject);
router.put('/:id', validateProject, updateProject);
router.delete('/:id', deleteProject);

export default router; 