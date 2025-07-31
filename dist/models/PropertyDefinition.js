import { Model } from 'objection';
export default class PropertyDefinition extends Model {
    static get tableName() {
        return 'property_definitions';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['entity_type', 'property_key', 'value_type', 'created_by_id'],
            properties: {
                id: { type: 'integer' },
                entity_type: { type: 'string', minLength: 1, maxLength: 255 },
                property_key: { type: 'string', minLength: 1, maxLength: 255 },
                value_type: { type: 'string', enum: ['string', 'number', 'date', 'boolean'] },
                formatting_rules: { type: ['string', 'null'] },
                is_required: { type: 'boolean' },
                created_by_id: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }
    static get relationMappings() {
        return {
            createdBy: {
                relation: Model.BelongsToOneRelation,
                modelClass: () => import('./User.js'),
                join: {
                    from: 'property_definitions.created_by_id',
                    to: 'users.id'
                }
            },
            options: {
                relation: Model.HasManyRelation,
                modelClass: () => import('./PropertyOption.js'),
                join: {
                    from: 'property_definitions.id',
                    to: 'property_options.property_definition_id'
                }
            },
            entityProperties: {
                relation: Model.HasManyRelation,
                modelClass: () => import('./EntityProperty.js'),
                join: {
                    from: 'property_definitions.id',
                    to: 'entity_properties.property_definition_id'
                }
            },
            taskRules: {
                relation: Model.HasManyRelation,
                modelClass: () => import('./TaskRule.js'),
                join: {
                    from: 'property_definitions.id',
                    to: 'task_rules.property_definition_id'
                }
            },
            permissions: {
                relation: Model.HasManyRelation,
                modelClass: () => import('./Permission.js'),
                join: {
                    from: 'property_definitions.id',
                    to: 'permissions.property_definition_id'
                }
            },
            approvalRequests: {
                relation: Model.HasManyRelation,
                modelClass: () => import('./ApprovalRequest.js'),
                join: {
                    from: 'property_definitions.id',
                    to: 'approval_requests.property_definition_id'
                }
            }
        };
    }
}
