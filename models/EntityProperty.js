import { Model } from 'objection';
import PropertyDefinition from './PropertyDefinition.js';
import User from './User.js';
import EntityPropertyLog from './EntityPropertyLog.js';

export default class EntityProperty extends Model {
  static get tableName() {
    return 'entity_properties';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['entity_type', 'entity_id', 'property_definition_id', 'created_by_id'],
      properties: {
        id: { type: 'integer' },
        entity_type: { type: 'string', minLength: 1, maxLength: 255 },
        entity_id: { type: 'integer' },
        property_definition_id: { type: 'integer' },
        string_value: { type: ['string', 'null'] },
        number_value: { type: ['number', 'null'] },
        date_value: { type: ['string', 'null'], format: 'date' },
        bool_value: { type: ['boolean', 'null'] },
        created_by_id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    return {
      propertyDefinition: {
        relation: Model.BelongsToOneRelation,
        modelClass: PropertyDefinition,
        join: {
          from: 'entity_properties.property_definition_id',
          to: 'property_definitions.id'
        }
      },
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'entity_properties.created_by_id',
          to: 'users.id'
        }
      },
      logs: {
        relation: Model.HasManyRelation,
        modelClass: EntityPropertyLog,
        join: {
          from: 'entity_properties.id',
          to: 'entity_property_logs.entity_property_id'
        }
      }
    };
  }

  // Helper method to get the actual value based on the property definition type
  getValue() {
    const definition = this.propertyDefinition;
    if (!definition) return null;

    switch (definition.value_type) {
      case 'string':
        return this.string_value;
      case 'number':
        return this.number_value;
      case 'date':
        return this.date_value;
      case 'boolean':
        return this.bool_value;
      default:
        return null;
    }
  }

  // Helper method to set the value based on the property definition type
  setValue(value) {
    const definition = this.propertyDefinition;
    if (!definition) return;

    // Clear all values first
    this.string_value = null;
    this.number_value = null;
    this.date_value = null;
    this.bool_value = null;

    switch (definition.value_type) {
      case 'string':
        this.string_value = value;
        break;
      case 'number':
        this.number_value = value;
        break;
      case 'date':
        this.date_value = value;
        break;
      case 'boolean':
        this.bool_value = value;
        break;
    }
  }
} 