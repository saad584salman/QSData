import jwt from 'jsonwebtoken';
function jwtVerify(token, secret) {
    return jwt.verify(token, secret);
}
export default function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Unauthorized - No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token || typeof token !== 'string') {
        res.status(401).json({ error: 'Unauthorized - Invalid token format' });
        return;
    }
    try {
        // Use development secret if not configured
        const jwtSecret = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'dev-secret-key-change-in-production';
        const decoded = jwtVerify(token, jwtSecret);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.error('JWT verification failed:', err.message);
        res.status(401).json({ error: 'Invalid token' });
    }
}
