import mongoose, { Schema } from 'mongoose';
import { ISlot } from './slot.interface';

const SlotSchema: Schema = new Schema({
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
});

export default mongoose.model<ISlot>('Slot', SlotSchema);
