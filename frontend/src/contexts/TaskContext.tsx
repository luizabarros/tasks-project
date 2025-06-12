import { createContext, useContext, useState, useEffect } from 'react'
import { Task } from '../types/task'
import { getTasks, createTask } from '../services/taskService'

interface TaskContextType {
  tasks: Task[]
  fetchTasks: () => void
  addTask: (task: Omit<Task, 'id'>) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  const addTask = async (task: Omit<Task, 'id'>) => {
    await createTask(task)
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}