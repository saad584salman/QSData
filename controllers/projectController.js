import Project from '../models/Project.js';
import EntityProperty from '../models/EntityProperty.js';
import PropertyDefinition from '../models/PropertyDefinition.js';
import { validationResult } from 'express-validator';

export const getProjects = async (req, res) => {
  try {
    const { page = 1, limit = 10, property, value, entity_type = 'project' } = req.query;
    const offset = (page - 1) * limit;

    let query = Project.query()
      .orderBy('created_at', 'desc');

    // Filter by property if specified
    if (property && value) {
      query = query
        .joinRelated('entityProperties')
        .joinRelated('entityProperties.propertyDefinition')
        .where('entityProperties.entity_type', entity_type)
        .where('entityProperties:propertyDefinition.property_key', property)
        .where('entityProperties.string_value', value);
    }

    const projects = await query.limit(limit).offset(offset);
    const total = await Project.query().resultSize();

    res.json({
      projects,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.query()
      .findById(id)
      .withGraphFetched('entityProperties.propertyDefinition');

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, parent_project_id, properties = [] } = req.body;
    const created_by_id = req.user?.id || 1; // Use authenticated user ID

    const project = await Project.query().insert({
      name,
      parent_project_id,
      created_by_id
    });

    // Create entity properties if provided
    if (properties.length > 0) {
      const entityProperties = properties.map(prop => ({
        entity_type: 'project',
        entity_id: project.id,
        property_definition_id: prop.property_definition_id,
        string_value: prop.value_type === 'string' ? prop.value : null,
        number_value: prop.value_type === 'number' ? prop.value : null,
        date_value: prop.value_type === 'date' ? prop.value : null,
        bool_value: prop.value_type === 'boolean' ? prop.value : null,
        created_by_id
      }));

      await EntityProperty.query().insert(entityProperties);
    }

    const createdProject = await Project.query()
      .findById(project.id);

    res.status(201).json(createdProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, parent_project_id, properties = [] } = req.body;

    const project = await Project.query().findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Update project basic info
    await Project.query().patch({
      name,
      parent_project_id
    }).where('id', id);

    // Update entity properties
    if (properties.length > 0) {
      for (const prop of properties) {
        const existingProp = await EntityProperty.query()
          .where({
            entity_type: 'project',
            entity_id: id,
            property_definition_id: prop.property_definition_id
          })
          .first();

        if (existingProp) {
          // Update existing property
          await EntityProperty.query()
            .patch({
              string_value: prop.value_type === 'string' ? prop.value : null,
              number_value: prop.value_type === 'number' ? prop.value : null,
              date_value: prop.value_type === 'date' ? prop.value : null,
              bool_value: prop.value_type === 'boolean' ? prop.value : null
            })
            .where('id', existingProp.id);
        } else {
          // Create new property
          await EntityProperty.query().insert({
            entity_type: 'project',
            entity_id: id,
            property_definition_id: prop.property_definition_id,
            string_value: prop.value_type === 'string' ? prop.value : null,
            number_value: prop.value_type === 'number' ? prop.value : null,
            date_value: prop.value_type === 'date' ? prop.value : null,
            bool_value: prop.value_type === 'boolean' ? prop.value : null,
            created_by_id: req.user.id
          });
        }
      }
    }

    const updatedProject = await Project.query()
      .findById(id);

    res.json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.query().findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Delete related entity properties
    await EntityProperty.query()
      .where({
        entity_type: 'project',
        entity_id: id
      })
      .delete();

    // Delete the project
    await Project.query().deleteById(id);

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 