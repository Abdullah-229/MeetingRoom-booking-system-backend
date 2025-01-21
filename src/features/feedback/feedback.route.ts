import { Router } from 'express';
import { addFeedback, getFeedbacks, getFeedback, updateFeedbackDetails, removeFeedback } from './feedback.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { feedbackSchema } from './feedback.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(feedbackSchema), addFeedback);
router.get('/', authMiddleware, getFeedbacks);
router.get('/:id', authMiddleware, getFeedback);
router.put('/:id', authMiddleware, validateSchema(feedbackSchema), updateFeedbackDetails);
router.delete('/:id', authMiddleware, removeFeedback);

export default router;
