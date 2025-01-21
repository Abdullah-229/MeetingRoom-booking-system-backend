import { ISlot } from './slot.interface';
import Slot from './slot.model';

export const createSlot = async (slotData: ISlot) => {
  const slot = new Slot(slotData);
  await slot.save();
  return slot;
};

export const getAllSlots = async () => {
  return Slot.find().populate('room');
};

export const getSlotById = async (id: string) => {
  return Slot.findById(id).populate('room');
};

export const updateSlot = async (id: string, slotData: Partial<ISlot>) => {
  return Slot.findByIdAndUpdate(id, slotData, { new: true });
};

export const deleteSlot = async (id: string) => {
  return Slot.findByIdAndDelete(id);
};
