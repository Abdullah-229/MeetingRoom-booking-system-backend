import { IRoom } from './room.interface';
import Room from './room.model';

export const createRoom = async (roomData: IRoom) => {
  const room = new Room(roomData);
  await room.save();
  return room;
};

export const getAllRooms = async () => {
  return Room.find();
};

export const getRoomById = async (id: string) => {
  return Room.findById(id);
};

export const updateRoom = async (id: string, roomData: Partial<IRoom>) => {
  return Room.findByIdAndUpdate(id, roomData, { new: true });
};

export const deleteRoom = async (id: string) => {
  return Room.findByIdAndDelete(id);
};
