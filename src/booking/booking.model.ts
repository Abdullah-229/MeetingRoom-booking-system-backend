import mongoose, { Schema } from 'mongoose';
import { IBooking } from './booking.interface';

const BookingSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: String, enum: ['Confirmed', 'Unconfirmed'], default: 'Unconfirmed' },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
