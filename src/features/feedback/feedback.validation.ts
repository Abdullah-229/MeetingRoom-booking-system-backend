import { z } from 'zod';

export const feedbackSchema = z.object({
  user: z.string().nonempty("User ID is required"),
  booking: z.string().nonempty("Booking ID is required"),
  room: z.string().nonempty("Room ID is required"),
  message: z.string().nonempty("Message is required"),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
});
