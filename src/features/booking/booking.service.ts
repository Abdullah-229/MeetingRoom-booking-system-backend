import { IBooking } from './booking.interface';
import Booking from './booking.model';

export const createBooking = async (bookingData: IBooking) => {
  const booking = new Booking(bookingData);
  await booking.save();
  return booking;
};

export const getAllBookings = async () => {
  return Booking.find().populate('user').populate('room');
};

export const getBookingById = async (id: string) => {
  return Booking.findById(id).populate('user').populate('room');
};

export const updateBooking = async (id: string, bookingData: Partial<IBooking>) => {
  return Booking.findByIdAndUpdate(id, bookingData, { new: true });
};

export const deleteBooking = async (id: string) => {
  return Booking.findByIdAndDelete(id);
};
