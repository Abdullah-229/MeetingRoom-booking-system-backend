import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
});

export default mongoose.model<IUser>('User', UserSchema);
