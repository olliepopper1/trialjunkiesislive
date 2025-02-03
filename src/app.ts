import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import logger from './utils/logger';

const app = express();

app.use(cors());
app.use(express.json());

// Initialize routes
const router = express.Router();

interface AuthRequest extends Request {
  user?: { id: number };
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: number };
    req.user = decoded;
    next();
  } catch (err) {
    logger.error('Auth error:', err);
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes
router.get('/test', (_req: Request, res: Response) => {
  res.json({ message: 'success' });
});

router.post('/auth/login', async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const user = { id: 1, email: 'test@test.com', password: await bcrypt.hash('password123', 10) };
    
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');
    res.json({ token });
  } catch (err) {
    logger.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/protected', authMiddleware, (req: AuthRequest, res: Response) => {
  res.json({ message: 'Protected data', userId: req.user?.id });
});

// Apply routes
app.use('/api', router);

// Error handling - fix middleware functions
app.use((req: Request, res: Response, next: NextFunction) => notFoundHandler(req, res, next));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => errorHandler(err, req, res, next));

export default app;
