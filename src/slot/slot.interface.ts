import { Document } from 'mongoose';

export interface ISlot extends Document {
  room: string;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}
