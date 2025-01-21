import { Request, Response } from 'express';
import { createFeedback, getAllFeedback, getFeedbackById, updateFeedback, deleteFeedback } from './feedback.service';

export const addFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await createFeedback(req.body);
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await getAllFeedback();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await getFeedbackById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateFeedbackDetails = async (req: Request, res: Response) => {
  try {
    const feedback = await updateFeedback(req.params.id, req.body);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await deleteFeedback(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
