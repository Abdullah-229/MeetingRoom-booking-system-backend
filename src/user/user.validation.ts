import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Please include a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  role: z.enum(['USER', 'ADMIN']).optional(), // Make role optional for user registration
});

export const loginSchema = z.object({
  email: z.string().email("Please include a valid email"),
  password: z.string().nonempty("Password is required"),
});
