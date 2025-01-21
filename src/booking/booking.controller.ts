import { Request, Response } from 'express';
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from './booking.service';

export const addBooking = async (req: Request, res: Response) => {
  try {
    const booking = await createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await getAllBookings();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBooking = async (req: Request, res: Response) => {
  try {
    const booking = await getBookingById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBookingDetails = async (req: Request, res: Response) => {
  try {
    const booking = await updateBooking(req.params.id, req.body);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeBooking = async (req: Request, res: Response) => {
  try {
    const booking = await deleteBooking(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
