import { z } from 'zod';

export const paymentSchema = z.object({
  user: z.string().nonempty("User ID is required"),
  booking: z.string().nonempty("Booking ID is required"),
  amount: z.number().min(0, "Amount must be a positive number"),
  paymentMethod: z.enum(['CreditCard', 'PayPal', 'BankTransfer']),
});
