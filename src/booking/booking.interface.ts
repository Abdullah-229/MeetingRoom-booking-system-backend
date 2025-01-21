import { Document } from 'mongoose';

export interface IBooking extends Document {
  user: string;
  room: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: 'Confirmed' | 'Unconfirmed';
}
