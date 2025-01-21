import mongoose, { Schema } from 'mongoose';
import { IAuth } from './auth.interface';

const AuthSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refreshToken: { type: String, required: true },
});

export default mongoose.model<IAuth>('Auth', AuthSchema);
