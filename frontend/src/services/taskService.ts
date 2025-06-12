import axios from 'axios'
import { Task } from '../types/task'

const API_URL = 'http://localhost:3000/api/tasks'

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL)
  return response.data
}

export const createTask = async (task: Omit<Task, 'id', 'created_at'>): Promise<void> => {
  await axios.post(API_URL, task)
}