import { Model } from 'objection';
export default class Role extends Model {
    static get tableName() {
        return 'roles';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'hierarchy_level'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                hierarchy_level: { type: 'integer', minimum: 0 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }
    static get relationMappings() {
        const User = require('./User.js').default;
        return {
            users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'roles.id',
                    to: 'users.role_id'
                }
            }
        };
    }
}
