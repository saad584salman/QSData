import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to load users from JSON file or fallback to authUsers.js
async function loadUsers() {
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
  return users.default;
}

export async function login(req, res) {
  const { username, password } = req.body;
  
  // Input validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  
  try {
    const users = await loadUsers();
    const user = users.find(u => u.username === username);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Use development secret if not configured
    const jwtSecret = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';
    
    const token = jwt.sign(
      { username, role: user.role },
      jwtSecret,
      { expiresIn: '1h' }
    );
    
    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Authentication error' });
  }
}
