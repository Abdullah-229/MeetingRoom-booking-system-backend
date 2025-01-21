import { z } from 'zod';

export const refreshTokenSchema = z.object({
  refreshToken: z.string().nonempty("Refresh token is required"),
});
