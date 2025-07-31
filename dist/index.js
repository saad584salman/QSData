import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';
import './config/database.js'; // Initialize database connection
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = parseInt(process.env.PORT || '3000');
// Security: Validate required environment variables
if (!process.env.JWT_SECRET) {
    console.error('CRITICAL: JWT_SECRET environment variable is not set!');
    process.exit(1);
}
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// Enhanced security headers
app.use(helmet({
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            imgSrc: ["'self'", "data:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
        },
    },
}));
// Secure CORS configuration
app.use(cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Enhanced rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
// API routes
app.use('/api', apiRoutes);
// Health check endpoint
app.get('/health', (_req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});
// Serve static files
app.use(express.static(path.join(__dirname, 'client/dist')));
// Catch-all handler for SPA
app.get('*', (_req, res) => {
    const indexPath = path.join(__dirname, 'client/dist/index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    }
    else {
        res.status(404).json({
            error: 'Frontend not built. Please run: npm run client:build',
            message: 'The React application needs to be built before serving.'
        });
    }
});
// Error handling middleware (must be last)
app.use(errorHandler);
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📊 Database: ${process.env.DB_NAME || 'qsdata'}`);
    console.log(`🔗 API: http://localhost:${PORT}/api`);
    console.log(`🏥 Health: http://localhost:${PORT}/health`);
});
