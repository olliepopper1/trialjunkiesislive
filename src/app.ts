import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();

app.use(cors());
app.use(express.json());

// Auth middleware
const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'success' });
});

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  // Mock user for testing
  const user = { id: 1, email: 'test@test.com', password: await bcrypt.hash('password123', 10) };
  
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
});

// Protected routes
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected data' });
});

export default app;
