import { z } from 'zod';

export const roomSchema = z.object({
  name: z.string().nonempty("Room name is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  pricePerSlot: z.number().min(0, "Price per slot must be a positive number"),
  amenities: z.array(z.string()).nonempty("Amenities must be provided"),
});
