import { Router } from 'express';
import path from 'path';
import express from 'express';

const router = Router();

// Serve static files from the public directory
router.use(express.static(path.join(__dirname, '../../public')));

// Serve index.html for all routes (Single Page Application support)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

export default router;
