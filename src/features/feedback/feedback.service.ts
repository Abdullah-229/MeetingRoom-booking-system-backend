import { IFeedback } from './feedback.interface';
import Feedback from './feedback.model';

export const createFeedback = async (feedbackData: IFeedback) => {
  const feedback = new Feedback(feedbackData);
  await feedback.save();
  return feedback;
};

export const getAllFeedback = async () => {
  return Feedback.find().populate('user').populate('booking').populate('room');
};

export const getFeedbackById = async (id: string) => {
  return Feedback.findById(id).populate('user').populate('booking').populate('room');
};

export const updateFeedback = async (id: string, feedbackData: Partial<IFeedback>) => {
  return Feedback.findByIdAndUpdate(id, feedbackData, { new: true });
};

export const deleteFeedback = async (id: string) => {
  return Feedback.findByIdAndDelete(id);
};
