import { Router } from 'express';
import { addReport, getReports, getReport, updateReportDetails, removeReport } from './report.controller';
import { validateSchema } from '../../middlewares/validate.middleware';
import { reportSchema } from './report.validation';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validateSchema(reportSchema), addReport);
router.get('/', authMiddleware, getReports);
router.get('/:id', authMiddleware, getReport);
router.put('/:id', authMiddleware, validateSchema(reportSchema), updateReportDetails);
router.delete('/:id', authMiddleware, removeReport);

export default router;
