import { Router } from 'express';
import { addPayment, getPayments, getPayment, updatePaymentDetails, removePayment } from './payment.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { paymentSchema } from './payment.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(paymentSchema), addPayment);
router.get('/', authMiddleware, getPayments);
router.get('/:id', authMiddleware, getPayment);
router.put('/:id', authMiddleware, validateSchema(paymentSchema), updatePaymentDetails);
router.delete('/:id', authMiddleware, removePayment);

export default router;
