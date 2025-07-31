import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from '../types/index.js';

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export default function(requiredRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !requiredRoles.includes(req.user.role)) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }
    next();
  };
} 