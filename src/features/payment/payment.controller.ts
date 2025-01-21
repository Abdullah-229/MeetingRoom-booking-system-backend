import { Request, Response } from 'express';
import { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment } from './payment.service';

export const addPayment = async (req: Request, res: Response) => {
  try {
    const payment = await createPayment(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await getAllPayments();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPayment = async (req: Request, res: Response) => {
  try {
    const payment = await getPaymentById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePaymentDetails = async (req: Request, res: Response) => {
  try {
    const payment = await updatePayment(req.params.id, req.body);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removePayment = async (req: Request, res: Response) => {
  try {
    const payment = await deletePayment(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
