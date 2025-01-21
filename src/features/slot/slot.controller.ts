import { Request, Response } from 'express';
import { createSlot, getAllSlots, getSlotById, updateSlot, deleteSlot } from './slot.service';

export const addSlot = async (req: Request, res: Response) => {
  try {
    const slot = await createSlot(req.body);
    res.status(201).json(slot);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSlots = async (req: Request, res: Response) => {
  try {
    const slots = await getAllSlots();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSlot = async (req: Request, res: Response) => {
  try {
    const slot = await getSlotById(req.params.id);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json(slot);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateSlotDetails = async (req: Request, res: Response) => {
  try {
    const slot = await updateSlot(req.params.id, req.body);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json(slot);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeSlot = async (req: Request, res: Response) => {
  try {
    const slot = await deleteSlot(req.params.id);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json({ message: 'Slot deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
