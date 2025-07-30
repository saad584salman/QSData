import { Model } from 'objection';

export default class Project extends Model {
  static get tableName() {
    return 'projects';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'created_by_id'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        parent_project_id: { type: ['integer', 'null'] },
        created_by_id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    return {
      parentProject: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'projects.parent_project_id',
          to: 'projects.id'
        }
      },
      childProjects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: 'projects.id',
          to: 'projects.parent_project_id'
        }
      },
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./User.js').default,
        join: {
          from: 'projects.created_by_id',
          to: 'users.id'
        }
      },
      entityProperties: {
        relation: Model.HasManyRelation,
        modelClass: require('./EntityProperty.js').default,
        join: {
          from: 'projects.id',
          to: 'entity_properties.entity_id'
        },
        filter: (builder) => {
          builder.where('entity_properties.entity_type', 'project');
        }
      },
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: require('./Task.js').default,
        join: {
          from: 'projects.id',
          to: 'tasks.entity_id'
        },
        filter: (builder) => {
          builder.where('tasks.entity_type', 'project');
        }
      }
    };
  }
} 