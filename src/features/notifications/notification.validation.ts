import { z } from 'zod';

export const notificationSchema = z.object({
  user: z.string().nonempty("User ID is required"),
  message: z.string().nonempty("Message is required"),
  type: z.enum(['Reminder', 'Confirmation', 'Cancellation']),
});
