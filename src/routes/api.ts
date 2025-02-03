import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

router.get('/data', (_req, res) => {
  res.json({
    message: 'Test data',
    items: []
  });
});

export default router;