import { Document } from 'mongoose';

export interface IFeedback extends Document {
  user: string;
  booking: string;
  room: string;
  message: string;
  rating: number; // Rating can be a number between 1 and 5
  createdAt: Date;
}
