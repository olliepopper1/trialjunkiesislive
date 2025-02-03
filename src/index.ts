import express, { Express } from 'express';
import { Server } from 'http';
import path from 'path';
import routes from './routes';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from multiple directories
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

// Use routes after static file middleware
app.use('/', routes);

// Create server instance
const server: Server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please try a different port.`);
        process.exit(1);
    } else {
        console.error('Server error:', err);
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});