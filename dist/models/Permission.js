import { Model } from 'objection';
export default class Permission extends Model {
    static get tableName() {
        return 'permissions';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['entity_type'],
            properties: {
                id: { type: 'integer' },
                role_id: { type: ['integer', 'null'] },
                user_id: { type: ['integer', 'null'] },
                entity_type: { type: 'string', minLength: 1, maxLength: 255 },
                entity_id: { type: ['integer', 'null'] },
                property_definition_id: { type: ['integer', 'null'] },
                can_view: { type: 'boolean', default: false },
                can_edit: { type: 'boolean', default: false },
                requires_approval: { type: 'boolean', default: false },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }
    static get relationMappings() {
        const Role = require('./Role.js').default;
        const User = require('./User.js').default;
        const PropertyDefinition = require('./PropertyDefinition.js').default;
        return {
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: 'permissions.role_id',
                    to: 'roles.id'
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'permissions.user_id',
                    to: 'users.id'
                }
            },
            propertyDefinition: {
                relation: Model.BelongsToOneRelation,
                modelClass: PropertyDefinition,
                join: {
                    from: 'permissions.property_definition_id',
                    to: 'property_definitions.id'
                }
            }
        };
    }
}
