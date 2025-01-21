import { Router } from 'express';
import { generateNewRefreshToken, refreshAccessToken } from './auth.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { refreshTokenSchema } from './auth.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/refresh-token', authMiddleware, validateSchema(refreshTokenSchema), generateNewRefreshToken);
router.post('/access-token', validateSchema(refreshTokenSchema), refreshAccessToken);

export default router;
