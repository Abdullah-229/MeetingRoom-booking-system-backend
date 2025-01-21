import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: 'USER' | 'ADMIN';
}
