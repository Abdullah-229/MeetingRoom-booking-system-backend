import { z } from 'zod';

export const slotSchema = z.object({
  room: z.string().nonempty("Room is required"),
  date: z.string().transform((str) => new Date(str)).refine((date) => !isNaN(date.getTime()), {
    message: "Invalid date",
  }),
  startTime: z.string().nonempty("Start time is required"),
  endTime: z.string().nonempty("End time is required"),
});
