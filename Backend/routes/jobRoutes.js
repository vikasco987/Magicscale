import express from 'express';
import { getJobs, createJob, updateJob, deleteJob } from '../controllers/jobController.js';
import { verifyToken, verifyAdminOrSeller } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/', verifyToken, verifyAdminOrSeller, createJob);
router.put('/:id', verifyToken, verifyAdminOrSeller, updateJob);
router.delete('/:id', verifyToken, verifyAdminOrSeller, deleteJob);

export default router;
