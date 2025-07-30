import { Model } from 'objection';
import Task from './Task.js';
import User from './User.js';

export default class TaskLog extends Model {
  static get tableName() {
    return 'task_logs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['task_id', 'status', 'changed_by_id'],
      properties: {
        id: { type: 'integer' },
        task_id: { type: 'integer' },
        status: { type: 'string', minLength: 1, maxLength: 255 },
        changed_by_id: { type: 'integer' },
        changed_at: { type: 'string', format: 'date-time' },
        notes: { type: ['string', 'null'] }
      }
    };
  }

  static get relationMappings() {
    return {
      task: {
        relation: Model.BelongsToOneRelation,
        modelClass: Task,
        join: {
          from: 'task_logs.task_id',
          to: 'tasks.id'
        }
      },
      changedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'task_logs.changed_by_id',
          to: 'users.id'
        }
      }
    };
  }
} 