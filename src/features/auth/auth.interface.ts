import { Document } from 'mongoose';

export interface IAuth extends Document {
  userId: string;
  refreshToken: string;
}
