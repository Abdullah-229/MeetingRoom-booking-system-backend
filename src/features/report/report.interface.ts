import { Document } from 'mongoose';

export interface IReport extends Document {
  reportType: 'SystemUsage' | 'RoomUtilization' | 'UserActivity';
  generatedAt: Date;
  data: any;
}
