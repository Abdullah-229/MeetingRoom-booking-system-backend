import express from 'express';
import connectDB from './config/database';
import userRoutes from './features/user/user.route';
import adminRoutes from './features/user/admin.route';
import roomRoutes from './features/room/room.route';
import bookingRoutes from './features/booking/booking.route';
import slotRoutes from './features/slot/slot.route'; // Assuming slot route exists
import notificationRoutes from './features/notifications/notification.route';
import reportRoutes from './features/report/report.route';
import paymentRoutes from './features/payment/payment.route';
import feedbackRoutes from './features/feedback/feedback.route';
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
app.use('/api/slots', slotRoutes); // Assuming slot route exists
app.use('/api/notifications', notificationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/feedbacks', feedbackRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
