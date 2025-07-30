import { Model } from 'objection';

export default class TaskRule extends Model {
  static get tableName() {
    return 'task_rules';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'entity_type', 'created_by_id'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        entity_type: { type: 'string', minLength: 1, maxLength: 255 },
        property_definition_id: { type: ['integer', 'null'] },
        description: { type: ['string', 'null'] },
        created_by_id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    const User = require('./User.js').default;
    const PropertyDefinition = require('./PropertyDefinition.js').default;
    const Task = require('./Task.js').default;
    
    return {
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'task_rules.created_by_id',
          to: 'users.id'
        }
      },
      propertyDefinition: {
        relation: Model.BelongsToOneRelation,
        modelClass: PropertyDefinition,
        join: {
          from: 'task_rules.property_definition_id',
          to: 'property_definitions.id'
        }
      },
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'task_rules.id',
          to: 'tasks.task_rule_id'
        }
      }
    };
  }
} 