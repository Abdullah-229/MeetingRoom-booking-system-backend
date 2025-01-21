import mongoose, { Schema } from 'mongoose';
import { IRoom } from './room.interface';

const RoomSchema: Schema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  pricePerSlot: { type: Number, required: true },
  amenities: { type: [String], required: true },
});

export default mongoose.model<IRoom>('Room', RoomSchema);
