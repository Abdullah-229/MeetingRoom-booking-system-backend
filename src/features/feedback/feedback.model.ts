import mongoose, { Schema } from 'mongoose';
import { IFeedback } from './feedback.interface';

const FeedbackSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFeedback>('Feedback', FeedbackSchema);
