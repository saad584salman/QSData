import { Model } from 'objection';

export default class EntityPropertyLog extends Model {
  static get tableName() {
    return 'entity_property_logs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['entity_property_id', 'changed_by_id'],
      properties: {
        id: { type: 'integer' },
        entity_property_id: { type: 'integer' },
        old_value: { type: ['string', 'null'] },
        new_value: { type: ['string', 'null'] },
        changed_by_id: { type: 'integer' },
        changed_at: { type: 'string', format: 'date-time' },
        reason: { type: ['string', 'null'] }
      }
    };
  }

  static get relationMappings() {
    const EntityProperty = require('./EntityProperty.js').default;
    const User = require('./User.js').default;
    
    return {
      entityProperty: {
        relation: Model.BelongsToOneRelation,
        modelClass: EntityProperty,
        join: {
          from: 'entity_property_logs.entity_property_id',
          to: 'entity_properties.id'
        }
      },
      changedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'entity_property_logs.changed_by_id',
          to: 'users.id'
        }
      }
    };
  }
} 