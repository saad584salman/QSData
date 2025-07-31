export const errorHandler = (err, _req, res, _next) => {
    console.error('Error:', err);
    // Handle JSON parsing errors
    if (err.type === 'entity.parse.failed') {
        res.status(400).json({
            error: 'Bad Request',
            message: 'Invalid JSON format'
        });
        return;
    }
    // Handle validation errors
    if (err.name === 'ValidationError') {
        res.status(400).json({
            error: 'Validation Error',
            details: err.message
        });
        return;
    }
    // Handle database constraint errors
    if (err.code === '23505') { // Unique constraint violation
        res.status(409).json({
            error: 'Conflict',
            message: 'Resource already exists'
        });
        return;
    }
    if (err.code === '23503') { // Foreign key constraint violation
        res.status(400).json({
            error: 'Bad Request',
            message: 'Referenced resource does not exist'
        });
        return;
    }
    // Handle Objection.js errors
    if (err.name === 'ModelNotFoundError') {
        res.status(404).json({
            error: 'Not Found',
            message: 'Resource not found'
        });
        return;
    }
    // Handle JWT errors
    if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            error: 'Unauthorized',
            message: 'Invalid token'
        });
        return;
    }
    if (err.name === 'TokenExpiredError') {
        res.status(401).json({
            error: 'Unauthorized',
            message: 'Token expired'
        });
        return;
    }
    // Default error response
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};
export const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
