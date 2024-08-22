import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { ConnectDB } from './config/ConnectDB'; // Database connection
import logger from './logger'; // Custom logger using winston
import routes from './app.routes'; // Importing application routes

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

ConnectDB(); // Connect to the database

// Morgan setup to use winston for logging HTTP requests
app.use(morgan('combined', {
   stream: {
      write: (message: string) => logger.info(message.trim()) // Log HTTP requests with winston
   }
}));

// Middleware to log each API hit with user information if available
app.use((req: Request, res: Response, next: NextFunction) => {
   const user = req.user ? `User: ${req.user.role} (ID: ${req.user.id})` : 'User: Anonymous';
   logger.info(`API Hit: ${req.method} ${req.url} by ${user}`);
   next();
});

// Routes
app.use('/api', routes); // Use the routes from app.routes.ts under the /api path

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
   logger.error(`Error: ${err.message}`); // Log the error using winston
   res.status(500).json({ error: err.message }); // Respond with a 500 status code and error message
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`.bgBlue.white)
   logger.info(`Server is running on port ${PORT}`);
});
