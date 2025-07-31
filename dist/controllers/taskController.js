import Task from '../models/Task.js';
import TaskLog from '../models/TaskLog.js';
import TaskRule from '../models/TaskRule.js';
import { validationResult } from 'express-validator';
export const getTasks = async (req, res) => {
    try {
        const { status, assigned_to_user_id, assigned_to_office_id, entity_type, entity_id, page, limit } = req.query;
        let query = Task.query()
            .orderBy('created_at', 'desc');
        if (status) {
            query = query.where('status', status);
        }
        if (assigned_to_user_id) {
            query = query.where('assigned_to_user_id', assigned_to_user_id);
        }
        if (assigned_to_office_id) {
            query = query.where('assigned_to_office_id', assigned_to_office_id);
        }
        if (entity_type) {
            query = query.where('entity_type', entity_type);
        }
        if (entity_id) {
            query = query.where('entity_id', entity_id);
        }
        // If pagination parameters are provided, return paginated response
        if (page && limit) {
            const offset = (parseInt(page) - 1) * parseInt(limit);
            const tasks = await query.limit(parseInt(limit)).offset(offset);
            const total = await Task.query().resultSize();
            return res.json({
                tasks,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            });
        }
        // Otherwise return all results as array
        const tasks = await query;
        res.json(tasks);
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.query()
            .findById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    }
    catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const createTask = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { task_rule_id, entity_type, entity_id, assigned_to_user_id, assigned_to_office_id, due_date } = req.body;
        const created_by_id = req.user?.id || 1; // Use authenticated user ID
        const task = await Task.query().insert({
            task_rule_id,
            entity_type,
            entity_id,
            assigned_to_user_id,
            assigned_to_office_id,
            due_date,
            status: 'pending',
            created_by_id
        });
        // Create initial log entry
        await TaskLog.query().insert({
            task_id: task.id,
            status: 'pending',
            changed_by_id: created_by_id,
            notes: 'Task created'
        });
        const createdTask = await Task.query()
            .findById(task.id);
        res.status(201).json(createdTask);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const updateTask = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        const { assigned_to_user_id, assigned_to_office_id, due_date, status, notes } = req.body;
        const task = await Task.query().findById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const updateData = {};
        if (assigned_to_user_id !== undefined)
            updateData.assigned_to_user_id = assigned_to_user_id;
        if (assigned_to_office_id !== undefined)
            updateData.assigned_to_office_id = assigned_to_office_id;
        if (due_date !== undefined)
            updateData.due_date = due_date;
        if (status !== undefined)
            updateData.status = status;
        // Handle completion
        if (status === 'completed' && task.status !== 'completed') {
            updateData.completed_by_id = 1; // Default to admin user for now
            updateData.completed_at = new Date();
        }
        await Task.query().patch(updateData).where('id', id);
        // Create log entry if status changed
        if (status && status !== task.status) {
            await TaskLog.query().insert({
                task_id: id,
                status,
                changed_by_id: 1, // Default to admin user for now
                notes: notes || `Status changed to ${status}`
            });
        }
        const updatedTask = await Task.query()
            .findById(id);
        res.json(updatedTask);
    }
    catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.query().findById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        // Delete related logs
        await TaskLog.query()
            .where('task_id', id)
            .delete();
        // Delete the task
        await Task.query().deleteById(id);
        res.json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const completeTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { notes } = req.body;
        const task = await Task.query().findById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        if (task.status === 'completed') {
            return res.status(400).json({ error: 'Task is already completed' });
        }
        await Task.query().patch({
            status: 'completed',
            completed_by_id: 1, // Default to admin user for now
            completed_at: new Date()
        }).where('id', id);
        // Create log entry
        await TaskLog.query().insert({
            task_id: id,
            status: 'completed',
            changed_by_id: 1, // Default to admin user for now
            notes: notes || 'Task completed'
        });
        const completedTask = await Task.query()
            .findById(id);
        res.json(completedTask);
    }
    catch (error) {
        console.error('Error completing task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
