import { Router } from 'express';
import { createTask, listTasks } from '../controllers/taskController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/tasks', asyncHandler(createTask));
router.get('/tasks', asyncHandler(listTasks));

export default router;
