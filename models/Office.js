import { Model } from 'objection';

export default class Office extends Model {
  static get tableName() {
    return 'offices';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'type'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        type: { type: 'string', minLength: 1, maxLength: 255 },
        parent_office_id: { type: ['integer', 'null'] },
        headed_by_id: { type: ['integer', 'null'] },
        created_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    const User = require('./User.js').default;
    
    return {
      parentOffice: {
        relation: Model.BelongsToOneRelation,
        modelClass: Office,
        join: {
          from: 'offices.parent_office_id',
          to: 'offices.id'
        }
      },
      childOffices: {
        relation: Model.HasManyRelation,
        modelClass: Office,
        join: {
          from: 'offices.id',
          to: 'offices.parent_office_id'
        }
      },
      headedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'offices.headed_by_id',
          to: 'users.id'
        }
      },
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'offices.id',
          to: 'users.office_id'
        }
      }
    };
  }
} 