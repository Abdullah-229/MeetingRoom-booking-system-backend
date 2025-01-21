import { INotification } from './notification.interface';
import Notification from './notification.model';

export const createNotification = async (notificationData: INotification) => {
  const notification = new Notification(notificationData);
  await notification.save();
  return notification;
};

export const getNotifications = async () => {
  return Notification.find().populate('user');
};

export const getNotificationById = async (id: string) => {
  return Notification.findById(id).populate('user');
};

export const updateNotification = async (id: string, notificationData: Partial<INotification>) => {
  return Notification.findByIdAndUpdate(id, notificationData, { new: true });
};

export const deleteNotification = async (id: string) => {
  return Notification.findByIdAndDelete(id);
};
