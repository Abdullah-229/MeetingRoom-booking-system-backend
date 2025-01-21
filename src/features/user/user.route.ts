import { Router } from 'express';
import { registerUser, loginUser, getUser } from './user.controller';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUser);

export default router;
