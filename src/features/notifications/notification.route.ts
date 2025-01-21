import { Router } from 'express';
import { addNotification, getAllNotifications, getNotification, updateNotificationDetails, removeNotification } from './notification.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { notificationSchema } from './notification.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(notificationSchema), addNotification);
router.get('/', authMiddleware, getAllNotifications);
router.get('/:id', authMiddleware, getNotification);
router.put('/:id', authMiddleware, validateSchema(notificationSchema), updateNotificationDetails);
router.delete('/:id', authMiddleware, removeNotification);

export default router;
