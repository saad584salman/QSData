import { Model } from 'objection';

export default class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['task_rule_id', 'entity_type', 'entity_id', 'status', 'created_by_id'],
      properties: {
        id: { type: 'integer' },
        task_rule_id: { type: 'integer' },
        entity_type: { type: 'string', minLength: 1, maxLength: 255 },
        entity_id: { type: 'integer' },
        assigned_to_user_id: { type: ['integer', 'null'] },
        assigned_to_office_id: { type: ['integer', 'null'] },
        due_date: { type: ['string', 'null'], format: 'date' },
        status: { type: 'string', enum: ['pending', 'completed', 'overdue'] },
        created_by_id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' },
        completed_by_id: { type: ['integer', 'null'] },
        completed_at: { type: ['string', 'null'], format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    const TaskRule = require('./TaskRule.js').default;
    const User = require('./User.js').default;
    const Office = require('./Office.js').default;
    const TaskLog = require('./TaskLog.js').default;
    
    return {
      taskRule: {
        relation: Model.BelongsToOneRelation,
        modelClass: TaskRule,
        join: {
          from: 'tasks.task_rule_id',
          to: 'task_rules.id'
        }
      },
      assignedToUser: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.assigned_to_user_id',
          to: 'users.id'
        }
      },
      assignedToOffice: {
        relation: Model.BelongsToOneRelation,
        modelClass: Office,
        join: {
          from: 'tasks.assigned_to_office_id',
          to: 'offices.id'
        }
      },
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.created_by_id',
          to: 'users.id'
        }
      },
      completedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.completed_by_id',
          to: 'users.id'
        }
      },
      logs: {
        relation: Model.HasManyRelation,
        modelClass: TaskLog,
        join: {
          from: 'tasks.id',
          to: 'task_logs.task_id'
        }
      }
    };
  }
} 