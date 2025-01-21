import express from 'express';
import connectDB from './config/database';
import userRoutes from './user/user.route';
import roomRoutes from './room/room.route';
import bookingRoutes from './booking/booking.route';
import slotRoutes from './slot/slot.route';
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
app.use('/api/bookings', bookingRoutes);
app.use('/api/slots', slotRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
