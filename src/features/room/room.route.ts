import { Router } from 'express';
import { addRoom, getRooms, getRoom, updateRoomDetails, removeRoom } from './room.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { roomSchema } from './room.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(roomSchema), addRoom);
router.get('/', getRooms);
router.get('/:id', getRoom);
router.put('/:id', authMiddleware, validateSchema(roomSchema), updateRoomDetails);
router.delete('/:id', authMiddleware, removeRoom);

export default router;
