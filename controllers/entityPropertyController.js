import EntityProperty from '../models/EntityProperty.js';
import EntityPropertyLog from '../models/EntityPropertyLog.js';
import PropertyDefinition from '../models/PropertyDefinition.js';
import { validationResult } from 'express-validator';

export const getEntityProperties = async (req, res) => {
  try {
    const { 
      entity_type, 
      entity_id, 
      property_definition_id, 
      string_value,
      page, 
      limit 
    } = req.query;

    let query = EntityProperty.query()
      .orderBy('created_at', 'desc');

    if (entity_type) {
      query = query.where('entity_type', entity_type);
    }

    if (entity_id) {
      query = query.where('entity_id', entity_id);
    }

    if (property_definition_id) {
      query = query.where('property_definition_id', property_definition_id);
    }

    if (string_value) {
      query = query.where('string_value', 'like', `%${string_value}%`);
    }

    // If pagination parameters are provided, return paginated response
    if (page && limit) {
      const offset = (parseInt(page) - 1) * parseInt(limit);
      const entityProperties = await query.limit(parseInt(limit)).offset(offset);
      const total = await EntityProperty.query().resultSize();

      // Add computed value property
      const entityPropertiesWithValue = entityProperties.map(ep => ({
        ...ep,
        value: ep.string_value || ep.number_value || ep.date_value || ep.bool_value
      }));

      return res.json({
        entityProperties: entityPropertiesWithValue,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      });
    }

    // Otherwise return all results as array
    const entityProperties = await query;
    
    // Add computed value property
    const entityPropertiesWithValue = entityProperties.map(ep => ({
      ...ep,
      value: ep.string_value || ep.number_value || ep.date_value || ep.bool_value
    }));

    res.json(entityPropertiesWithValue);
  } catch (error) {
    console.error('Error fetching entity properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEntityPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const entityProperty = await EntityProperty.query()
      .findById(id);

    if (!entityProperty) {
      return res.status(404).json({ error: 'Entity property not found' });
    }

    // Add computed value property
    const entityPropertyWithValue = {
      ...entityProperty,
      value: entityProperty.string_value || entityProperty.number_value || entityProperty.date_value || entityProperty.bool_value
    };

    res.json(entityPropertyWithValue);
  } catch (error) {
    console.error('Error fetching entity property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createEntityProperty = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      entity_type, 
      entity_id, 
      property_definition_id, 
      value,
      value_type 
    } = req.body;
    
    const created_by_id = req.user?.id || 1; // Use authenticated user ID

    // Get property definition to determine value type
    const propertyDefinition = await PropertyDefinition.query().findById(property_definition_id);
    if (!propertyDefinition) {
      return res.status(400).json({ error: 'Property definition not found' });
    }

    const entityProperty = await EntityProperty.query().insert({
      entity_type,
      entity_id,
      property_definition_id,
      string_value: propertyDefinition.value_type === 'string' ? value : null,
      number_value: propertyDefinition.value_type === 'number' ? value : null,
      date_value: propertyDefinition.value_type === 'date' ? value : null,
      bool_value: propertyDefinition.value_type === 'boolean' ? value : null,
      created_by_id
    });

    const createdEntityProperty = await EntityProperty.query()
      .findById(entityProperty.id);

    // Add computed value property
    const entityPropertyWithValue = {
      ...createdEntityProperty,
      value: createdEntityProperty.string_value || createdEntityProperty.number_value || createdEntityProperty.date_value || createdEntityProperty.bool_value
    };

    res.status(201).json(entityPropertyWithValue);
  } catch (error) {
    console.error('Error creating entity property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateEntityProperty = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { value, reason } = req.body;

    const entityProperty = await EntityProperty.query()
      .findById(id);

    if (!entityProperty) {
      return res.status(404).json({ error: 'Entity property not found' });
    }

    // Store old value for logging
    const oldValue = entityProperty.getValue ? entityProperty.getValue() : null;

    // Get property definition to determine value type
    const propertyDefinition = await PropertyDefinition.query().findById(entityProperty.property_definition_id);
    const updateData = {
      string_value: null,
      number_value: null,
      date_value: null,
      bool_value: null
    };

    switch (propertyDefinition.value_type) {
      case 'string':
        updateData.string_value = value;
        break;
      case 'number':
        updateData.number_value = value;
        break;
      case 'date':
        updateData.date_value = value;
        break;
      case 'boolean':
        updateData.bool_value = value;
        break;
    }

    await EntityProperty.query().patch(updateData).where('id', id);

    // Create log entry
    await EntityPropertyLog.query().insert({
      entity_property_id: id,
      old_value: oldValue,
      new_value: value,
      changed_by_id: 1, // Default to admin user for now
      reason
    });

    const updatedEntityProperty = await EntityProperty.query()
      .findById(id);

    res.json(updatedEntityProperty);
  } catch (error) {
    console.error('Error updating entity property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteEntityProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const entityProperty = await EntityProperty.query().findById(id);
    if (!entityProperty) {
      return res.status(404).json({ error: 'Entity property not found' });
    }

    // Delete related logs
    await EntityPropertyLog.query()
      .where('entity_property_id', id)
      .delete();

    // Delete the entity property
    await EntityProperty.query().deleteById(id);

    res.json({ message: 'Entity property deleted successfully' });
  } catch (error) {
    console.error('Error deleting entity property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 