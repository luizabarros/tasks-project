import { TaskProvider } from './contexts/TaskContext'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

export default function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#caf0f8] to-[#0077b6] p-6">
        <h1 className="text-3xl font-bold text-center text-[#03045e] mb-6">Gerenciamento de Tarefas</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  )
}
