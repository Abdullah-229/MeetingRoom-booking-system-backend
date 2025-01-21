import { Request, Response } from 'express';
import { createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom } from './room.service';

interface CustomRequest extends Request {
  user: {
    id: string;
    role: string;
  };
}

export const addRoom = async (req: Request, res: Response) => {
  try {
    const room = await createRoom(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await getAllRooms();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRoom = async (req: Request, res: Response) => {
  try {
    const room = await getRoomById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRoomDetails = async (req: Request, res: Response) => {
  try {
    const room = await updateRoom(req.params.id, req.body);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeRoom = async (req: Request, res: Response) => {
  try {
    const room = await deleteRoom(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
