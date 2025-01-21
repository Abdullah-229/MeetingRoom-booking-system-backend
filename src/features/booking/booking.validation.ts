import { z } from 'zod';

export const bookingSchema = z.object({
  user: z.string().nonempty("User is required"),
  room: z.string().nonempty("Room is required"),
  date: z.string().transform((str) => new Date(str)).refine((date) => !isNaN(date.getTime()), {
    message: "Invalid date",
  }),
  startTime: z.string().nonempty("Start time is required"),
  endTime: z.string().nonempty("End time is required"),
});
