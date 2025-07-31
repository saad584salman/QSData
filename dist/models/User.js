import { Model } from 'objection';
import Role from './Role.js';
import Office from './Office.js';
import Project from './Project.js';
import PropertyDefinition from './PropertyDefinition.js';
import EntityProperty from './EntityProperty.js';
import Task from './Task.js';
import TaskLog from './TaskLog.js';
import ApprovalRequest from './ApprovalRequest.js';
export default class User extends Model {
    static get tableName() {
        return 'users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['full_name', 'email', 'password_hash', 'role_id'],
            properties: {
                id: { type: 'integer' },
                full_name: { type: 'string', minLength: 1, maxLength: 255 },
                email: { type: 'string', format: 'email', maxLength: 255 },
                password_hash: { type: 'string', minLength: 1 },
                role_id: { type: 'integer' },
                office_id: { type: ['integer', 'null'] },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }
    static get relationMappings() {
        return {
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: 'users.role_id',
                    to: 'roles.id'
                }
            },
            office: {
                relation: Model.BelongsToOneRelation,
                modelClass: Office,
                join: {
                    from: 'users.office_id',
                    to: 'offices.id'
                }
            },
            createdProjects: {
                relation: Model.HasManyRelation,
                modelClass: Project,
                join: {
                    from: 'users.id',
                    to: 'projects.created_by_id'
                }
            },
            createdPropertyDefinitions: {
                relation: Model.HasManyRelation,
                modelClass: PropertyDefinition,
                join: {
                    from: 'users.id',
                    to: 'property_definitions.created_by_id'
                }
            },
            createdEntityProperties: {
                relation: Model.HasManyRelation,
                modelClass: EntityProperty,
                join: {
                    from: 'users.id',
                    to: 'entity_properties.created_by_id'
                }
            },
            assignedTasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'users.id',
                    to: 'tasks.assigned_to_user_id'
                }
            },
            createdTasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'users.id',
                    to: 'tasks.created_by_id'
                }
            },
            completedTasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'users.id',
                    to: 'tasks.completed_by_id'
                }
            },
            taskLogs: {
                relation: Model.HasManyRelation,
                modelClass: TaskLog,
                join: {
                    from: 'users.id',
                    to: 'task_logs.changed_by_id'
                }
            },
            requestedApprovals: {
                relation: Model.HasManyRelation,
                modelClass: ApprovalRequest,
                join: {
                    from: 'users.id',
                    to: 'approval_requests.requested_by_id'
                }
            },
            approvedRequests: {
                relation: Model.HasManyRelation,
                modelClass: ApprovalRequest,
                join: {
                    from: 'users.id',
                    to: 'approval_requests.approved_by_id'
                }
            }
        };
    }
}
