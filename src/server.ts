import express from 'express';
import connectDB from './config/database';
import userRoutes from './user/user.route';
import roomRoutes from './room/room.route';
import errorMiddleware from './middlewares/error.middleware';

// Create an instance of Express app
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
