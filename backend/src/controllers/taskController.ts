import { Request, Response, NextFunction } from 'express';
import * as taskService from '../services/taskService';

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskService.createTask(req.body);
    return res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const listTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskService.listTasks();
    return res.json(tasks);
  } catch (error) {
    next(error);
  }
};
