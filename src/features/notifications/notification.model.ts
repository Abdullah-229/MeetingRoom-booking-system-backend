import mongoose, { Schema } from 'mongoose';
import { INotification } from './notification.interface';

const NotificationSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['Reminder', 'Confirmation', 'Cancellation'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<INotification>('Notification', NotificationSchema);
