import express from 'express';
import { body } from 'express-validator';
import { getPropertyDefinitions, getPropertyDefinitionById, createPropertyDefinition, updatePropertyDefinition, deletePropertyDefinition } from '../controllers/propertyDefinitionController.js';
import auth from '../middleware/auth.js';
const router = express.Router();
// Validation middleware
const validatePropertyDefinition = [
    body('entity_type').notEmpty().withMessage('Entity type is required'),
    body('property_key').notEmpty().withMessage('Property key is required'),
    body('value_type').isIn(['string', 'number', 'date', 'boolean']).withMessage('Invalid value type'),
    body('formatting_rules').optional().isString().withMessage('Formatting rules must be a string'),
    body('is_required').optional().isBoolean().withMessage('Is required must be a boolean'),
    body('options').optional().isArray().withMessage('Options must be an array'),
    body('options.*').optional().isString().withMessage('Option values must be strings')
];
// Routes
router.get('/', auth, getPropertyDefinitions);
router.get('/:id', auth, getPropertyDefinitionById);
router.post('/', auth, validatePropertyDefinition, createPropertyDefinition);
router.put('/:id', auth, validatePropertyDefinition, updatePropertyDefinition);
router.delete('/:id', auth, deletePropertyDefinition);
export default router;
