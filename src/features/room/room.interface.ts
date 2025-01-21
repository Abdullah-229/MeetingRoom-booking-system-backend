import { Document } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
}
