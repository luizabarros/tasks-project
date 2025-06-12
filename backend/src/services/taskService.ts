import { User } from '../models/User';
import { Task } from '../models/Task';
import { AppError } from '../middlewares/errorHandler';
import { validateTaskData } from '../utils/validation';

interface TaskInput {
  user_name: string;
  title: string;
  description: string;
}

export const createTask = async ({ user_name, title, description }: TaskInput) => {
  const errors = validateTaskData({ user_name, title, description });
  if (errors.length > 0) {
    throw new AppError(errors.join(', '), 400);
  }

  let user = await User.findOne({ where: { user_name } });
  if (!user) {
    user = await User.create({ user_name });
  }

  const task = await Task.create({
    user_id: user.id,
    created_at: new Date(),
    title,
    description,
  });

  return task;
};

export const listTasks = async () => {
  const tasks = await Task.findAll({
    include: [{ model: User, attributes: ['user_name'] }],
  });

  return tasks;
};
