import PropertyDefinition from '../models/PropertyDefinition.js';
import PropertyOption from '../models/PropertyOption.js';
import { validationResult } from 'express-validator';

export const getPropertyDefinitions = async (req, res) => {
  try {
    const { entity_type, page, limit } = req.query;

    let query = PropertyDefinition.query()
      .orderBy('created_at', 'desc');

    if (entity_type) {
      query = query.where('entity_type', entity_type);
    }

    // If pagination parameters are provided, return paginated response
    if (page && limit) {
      const offset = (parseInt(page) - 1) * parseInt(limit);
      const propertyDefinitions = await query.limit(parseInt(limit)).offset(offset);
      const total = await PropertyDefinition.query().resultSize();

      return res.json({
        propertyDefinitions,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      });
    }

    // Otherwise return all results as array
    const propertyDefinitions = await query;
    res.json(propertyDefinitions);
  } catch (error) {
    console.error('Error fetching property definitions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPropertyDefinitionById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const propertyDefinition = await PropertyDefinition.query()
      .findById(id);

    if (!propertyDefinition) {
      return res.status(404).json({ error: 'Property definition not found' });
    }

    res.json(propertyDefinition);
  } catch (error) {
    console.error('Error fetching property definition:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createPropertyDefinition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      entity_type, 
      property_key, 
      value_type, 
      formatting_rules, 
      is_required = false,
      options = []
    } = req.body;
    
    const created_by_id = req.user?.id || 1; // Use authenticated user ID

    const propertyDefinition = await PropertyDefinition.query().insert({
      entity_type,
      property_key,
      value_type,
      formatting_rules,
      is_required,
      created_by_id
    });

    // Create options if provided
    if (options.length > 0) {
      const propertyOptions = options.map(option => ({
        property_definition_id: propertyDefinition.id,
        option_value: option
      }));

      await PropertyOption.query().insert(propertyOptions);
    }

    const createdPropertyDefinition = await PropertyDefinition.query()
      .findById(propertyDefinition.id);

    res.status(201).json(createdPropertyDefinition);
  } catch (error) {
    console.error('Error creating property definition:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePropertyDefinition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { 
      entity_type, 
      property_key, 
      value_type, 
      formatting_rules, 
      is_required,
      options = []
    } = req.body;

    const propertyDefinition = await PropertyDefinition.query().findById(id);
    if (!propertyDefinition) {
      return res.status(404).json({ error: 'Property definition not found' });
    }

    // Update property definition
    await PropertyDefinition.query().patch({
      entity_type,
      property_key,
      value_type,
      formatting_rules,
      is_required
    }).where('id', id);

    // Update options
    if (options.length > 0) {
      // Delete existing options
      await PropertyOption.query()
        .where('property_definition_id', id)
        .delete();

      // Insert new options
      const propertyOptions = options.map(option => ({
        property_definition_id: id,
        option_value: option
      }));

      await PropertyOption.query().insert(propertyOptions);
    }

    const updatedPropertyDefinition = await PropertyDefinition.query()
      .findById(id);

    res.json(updatedPropertyDefinition);
  } catch (error) {
    console.error('Error updating property definition:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deletePropertyDefinition = async (req, res) => {
  try {
    const { id } = req.params;

    const propertyDefinition = await PropertyDefinition.query().findById(id);
    if (!propertyDefinition) {
      return res.status(404).json({ error: 'Property definition not found' });
    }

    // Delete related options
    await PropertyOption.query()
      .where('property_definition_id', id)
      .delete();

    // Delete the property definition
    await PropertyDefinition.query().deleteById(id);

    res.json({ message: 'Property definition deleted successfully' });
  } catch (error) {
    console.error('Error deleting property definition:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 