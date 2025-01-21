import { z } from 'zod';

export const reportSchema = z.object({
  reportType: z.enum(['SystemUsage', 'RoomUtilization', 'UserActivity']),
  data: z.any(),
});
