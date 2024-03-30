// Import necessary modules from the Express framework and external packages
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import CORS options from the configuration file
import { corsOptions } from './config/cors.config.js';
import indexRouter from './routes/index.route.js';
import path from 'path';

// Create an Express application instance
const app = express();

// Middleware and configuration setup

// Enable Cross-Origin Resource Sharing (CORS) using predefined options
app.use(cors(corsOptions));

// Parse incoming JSON requests with a limit of 16KB
app.use(express.json({ limit: '16kb' }));

// Parse incoming URL-encoded data with extended support and a limit of 16KB
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Serve static files from the "public" directory
app.use(express.static(path.resolve('public')));

// Parse cookies using the cookie-parser middleware
app.use(cookieParser());

app.use('/', indexRouter);

// Export the configured Express application instance for use in other parts of the application
export default app;
