import { IPayment } from './payment.interface';
import Payment from './payment.model';

export const createPayment = async (paymentData: IPayment) => {
  const payment = new Payment(paymentData);
  await payment.save();
  return payment;
};

export const getAllPayments = async () => {
  return Payment.find().populate('user').populate('booking');
};

export const getPaymentById = async (id: string) => {
  return Payment.findById(id).populate('user').populate('booking');
};

export const updatePayment = async (id: string, paymentData: Partial<IPayment>) => {
  return Payment.findByIdAndUpdate(id, paymentData, { new: true });
};

export const deletePayment = async (id: string) => {
  return Payment.findByIdAndDelete(id);
};
