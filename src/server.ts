import express from 'express';
import connectDB from './config/database';
import userRoutes from './features/user/user.route';
import adminRoutes from './features/user/admin.route';
import roomRoutes from './features/room/room.route';
import bookingRoutes from './features/booking/booking.route';
import slotRoutes from './features/slot/slot.route'; // slot route assumed to exist based on your requirement
import errorMiddleware from './middlewares/error.middleware';

// Create an instance of Express app
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/admin/users', adminRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/slots', slotRoutes); // slot route assumed to exist

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
