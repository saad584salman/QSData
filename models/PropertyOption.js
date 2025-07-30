import { Model } from 'objection';

export default class PropertyOption extends Model {
  static get tableName() {
    return 'property_options';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['property_definition_id', 'option_value'],
      properties: {
        id: { type: 'integer' },
        property_definition_id: { type: 'integer' },
        option_value: { type: 'string', minLength: 1 }
      }
    };
  }

  static get relationMappings() {
    const PropertyDefinition = require('./PropertyDefinition.js').default;
    
    return {
      propertyDefinition: {
        relation: Model.BelongsToOneRelation,
        modelClass: PropertyDefinition,
        join: {
          from: 'property_options.property_definition_id',
          to: 'property_definitions.id'
        }
      }
    };
  }
} 