import { Document } from 'mongoose';

export interface IPayment extends Document {
  user: string;
  booking: string;
  amount: number;
  paymentMethod: 'CreditCard' | 'PayPal' | 'BankTransfer';
  status: 'Pending' | 'Completed' | 'Failed';
  createdAt: Date;
}
