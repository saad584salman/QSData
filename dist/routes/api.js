import express from 'express';
import projectRoutes from './projects.js';
import propertyDefinitionRoutes from './propertyDefinitions.js';
import entityPropertyRoutes from './entityProperties.js';
import taskRoutes from './tasks.js';
import authRoutes from './auth.js';
import progressRoutes from './progress.js';
import zoneSummaryRoutes from './zoneSummary.js';
const router = express.Router();
// API routes
router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/property-definitions', propertyDefinitionRoutes);
router.use('/entity-properties', entityPropertyRoutes);
router.use('/tasks', taskRoutes);
router.use('/progress', progressRoutes);
router.use('/zone-summary', zoneSummaryRoutes);
// Health check endpoint
router.get('/health', (_req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
export default router;
