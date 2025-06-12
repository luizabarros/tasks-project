export interface Task {
  id: number
  user_name: string
  title: string
  description: string
  created_at: string
}

export interface TaskList extends Omit<Task, 'user_name'> {
  user: {
    user_name: string
  }
}