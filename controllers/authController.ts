import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { User, AuthResponse } from '../types/index.js';

function jwtSign(payload: any, secret: string, options: any) {
  return jwt.sign(payload, secret, options);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface UserData {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  role: string;
  role_id?: number | undefined;
  office_id?: number | undefined;
  full_name?: string | undefined;
  created_at?: string | undefined;
}

// Function to load users from JSON file or fallback to authUsers.js
async function loadUsers(): Promise<UserData[]> {
  try {
    // Try to load from users.json (for VPS deployment)
    const usersPath = path.join(__dirname, '..', 'users.json');
    if (fs.existsSync(usersPath)) {
      const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      return usersData.users || [];
    }
  } catch (error) {
    console.warn('Could not load users.json, falling back to authUsers.js');
  }
  
  // Fallback to authUsers.js (for development)
  const users = await import('../authUsers.js');
  return users.default as UserData[];
}

// Function to save users to JSON file
async function saveUsers(users: UserData[]): Promise<void> {
  try {
    const usersPath = path.join(__dirname, '..', 'users.json');
    fs.writeFileSync(usersPath, JSON.stringify({ users }, null, 2));
  } catch (error) {
    console.error('Error saving users:', error);
    throw error;
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body as { username: string; password: string };
  
  // Input validation
  if (!username || !password) {
    res.status(400).json({ errors: [{ msg: 'Username and password are required' }] });
    return;
  }
  
  try {
    const users = await loadUsers();
    const user = users.find(u => u.username === username);
    
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    
    // Use development secret if not configured
    const jwtSecret = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';
    
    const token = jwtSign(
      { id: user.id || 1, username, role: user.role },
      jwtSecret,
      { expiresIn: '1h' }
    );
    
    const response: AuthResponse = {
      token,
      user: { 
        id: user.id || 1, 
        username, 
        role: user.role 
      } as unknown as User,
      role: user.role
    };
    
    res.json(response);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Authentication error' });
  }
}

export async function register(req: Request, res: Response): Promise<void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password, role = 'user', role_id, office_id, full_name } = req.body as {
    username: string;
    email: string;
    password: string;
    role?: string;
    role_id?: number;
    office_id?: number;
    full_name?: string;
  };
  
  try {
    const users = await loadUsers();
    
    // Check if user already exists
    const existingUser = users.find(u => u.username === username || u.email === email);
    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }
    
    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Create new user
    const newUser: UserData = {
      id: users.length + 1,
      username,
      email,
      passwordHash,
      role,
      role_id,
      office_id,
      full_name,
      created_at: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save updated users
    await saveUsers(users);
    
    // Generate token
    const jwtSecret = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';
    const token = jwtSign(
      { id: newUser.id, username, role },
      jwtSecret,
      { expiresIn: '1h' }
    );
    
    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration error' });
  }
} 