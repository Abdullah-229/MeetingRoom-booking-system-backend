import { Router } from 'express';
import { addSlot, getSlots, getSlot, updateSlotDetails, removeSlot } from './slot.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { slotSchema } from './slot.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(slotSchema), addSlot);
router.get('/', getSlots);
router.get('/:id', getSlot);
router.put('/:id', authMiddleware, validateSchema(slotSchema), updateSlotDetails);
router.delete('/:id', authMiddleware, removeSlot);

export default router;
