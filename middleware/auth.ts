import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from '../types/index.js';

function jwtVerify(token: string, secret: string) {
  return jwt.verify(token, secret);
}

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export default function auth(
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
): void {
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
    const jwtSecret: string = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'dev-secret-key-change-in-production';
    const decoded = jwtVerify(token, jwtSecret) as unknown as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verification failed:', (err as Error).message);
    res.status(401).json({ error: 'Invalid token' });
  }
} 