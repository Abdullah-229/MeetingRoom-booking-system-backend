import mongoose, { Schema } from 'mongoose';
import { IReport } from './report.interface';

const ReportSchema: Schema = new Schema({
  reportType: { type: String, enum: ['SystemUsage', 'RoomUtilization', 'UserActivity'], required: true },
  generatedAt: { type: Date, default: Date.now },
  data: { type: Schema.Types.Mixed, required: true },
});

export default mongoose.model<IReport>('Report', ReportSchema);
