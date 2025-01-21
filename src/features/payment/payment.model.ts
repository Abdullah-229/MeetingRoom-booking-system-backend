import mongoose, { Schema } from 'mongoose';
import { IPayment } from './payment.interface';

const PaymentSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['CreditCard', 'PayPal', 'BankTransfer'], required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPayment>('Payment', PaymentSchema);
