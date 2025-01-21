import { Request, Response } from 'express';
import { createNotification, getNotifications, getNotificationById, updateNotification, deleteNotification } from './notification.service';

export const addNotification = async (req: Request, res: Response) => {
  try {
    const notification = await createNotification(req.body);
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await getNotifications();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getNotification = async (req: Request, res: Response) => {
  try {
    const notification = await getNotificationById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateNotificationDetails = async (req: Request, res: Response) => {
  try {
    const notification = await updateNotification(req.params.id, req.body);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeNotification = async (req: Request, res: Response) => {
  try {
    const notification = await deleteNotification(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
