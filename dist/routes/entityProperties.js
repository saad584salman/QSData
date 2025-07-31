import express from 'express';
import { body } from 'express-validator';
import { getEntityProperties, getEntityPropertyById, createEntityProperty, updateEntityProperty, deleteEntityProperty } from '../controllers/entityPropertyController.js';
import auth from '../middleware/auth.js';
const router = express.Router();
// Validation middleware
const validateEntityProperty = [
    body('entity_type').notEmpty().withMessage('Entity type is required'),
    body('entity_id').isInt().withMessage('Entity ID must be an integer'),
    body('property_definition_id').isInt().withMessage('Property definition ID must be an integer'),
    body('value').notEmpty().withMessage('Value is required'),
    body('value_type').optional().isIn(['string', 'number', 'date', 'boolean']).withMessage('Invalid value type')
];
const validateEntityPropertyUpdate = [
    body('value').notEmpty().withMessage('Value is required'),
    body('reason').optional().isString().withMessage('Reason must be a string')
];
// Routes
router.get('/', auth, getEntityProperties);
router.get('/:id', auth, getEntityPropertyById);
router.post('/', auth, validateEntityProperty, createEntityProperty);
router.put('/:id', auth, validateEntityPropertyUpdate, updateEntityProperty);
router.delete('/:id', auth, deleteEntityProperty);
export default router;
