const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../authUsers');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token, role: user.role });
};
