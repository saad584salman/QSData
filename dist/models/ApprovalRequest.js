import { Model } from 'objection';
export default class ApprovalRequest extends Model {
    static get tableName() {
        return 'approval_requests';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['entity_type', 'entity_id', 'requested_by_id', 'status'],
            properties: {
                id: { type: 'integer' },
                entity_type: { type: 'string', minLength: 1, maxLength: 255 },
                entity_id: { type: 'integer' },
                property_definition_id: { type: ['integer', 'null'] },
                requested_by_id: { type: 'integer' },
                requested_at: { type: 'string', format: 'date-time' },
                status: { type: 'string', enum: ['pending', 'approved', 'rejected'] },
                approved_by_id: { type: ['integer', 'null'] },
                approved_at: { type: ['string', 'null'], format: 'date-time' },
                reason: { type: ['string', 'null'] }
            }
        };
    }
    static get relationMappings() {
        const User = require('./User.js').default;
        const PropertyDefinition = require('./PropertyDefinition.js').default;
        return {
            requestedBy: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'approval_requests.requested_by_id',
                    to: 'users.id'
                }
            },
            approvedBy: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'approval_requests.approved_by_id',
                    to: 'users.id'
                }
            },
            propertyDefinition: {
                relation: Model.BelongsToOneRelation,
                modelClass: PropertyDefinition,
                join: {
                    from: 'approval_requests.property_definition_id',
                    to: 'property_definitions.id'
                }
            }
        };
    }
}
