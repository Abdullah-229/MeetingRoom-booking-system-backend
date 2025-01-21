import { Document } from 'mongoose';

export interface INotification extends Document {
  user: string;
  message: string;
  type: 'Reminder' | 'Confirmation' | 'Cancellation';
  createdAt: Date;
}
