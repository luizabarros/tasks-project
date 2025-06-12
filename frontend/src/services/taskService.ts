import axios from 'axios'
import { Task, TaskList } from '../types/task'

const API_URL = 'http://localhost:3000/api/tasks'

export const getTasks = async (): Promise<TaskList[]> => {
  const response = await axios.get(API_URL)
  return response.data
}

export const createTask = async (task: Omit<Task, 'id' | 'created_at'>): Promise<void> => {
  await axios.post(API_URL, task)
}