import { Router } from 'express';
import { addBooking, getBookings, getBooking, updateBookingDetails, removeBooking } from './booking.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { bookingSchema } from './booking.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(bookingSchema), addBooking);
router.get('/', authMiddleware, getBookings);
router.get('/:id', authMiddleware, getBooking);
router.put('/:id', authMiddleware, validateSchema(bookingSchema), updateBookingDetails);
router.delete('/:id', authMiddleware, removeBooking);

export default router;
