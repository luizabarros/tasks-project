import { createContext, useContext, useState, useEffect } from 'react'
import { Task, TaskList } from '../types/task'
import { getTasks, createTask } from '../services/taskService'
import { toast } from 'react-toastify'

interface TaskContextType {
  tasks: TaskList[]
  loading?: boolean
  fetchTasks: () => void
  addTask: (task: Omit<Task, 'id' | 'created_at'>) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<TaskList[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const data = await getTasks()
      setTasks(data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))
    } catch (error) {
      console.error('fetchTasks error:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (task: Omit<Task, 'id' | 'created_at'>) => {
    setLoading(true)
    try {
      await createTask(task)
      toast.success('Tarefa adicionada com sucesso!')
      fetchTasks()
    } catch (error) {
      toast.error('Erro ao adicionar tarefa. Tente novamente.')
      console.error('addTask error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, loading, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}
