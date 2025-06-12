import { TaskProvider } from './contexts/TaskContext'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <div>
          <h1 className="app-title">Gerenciamento de Tarefas</h1>
          <TaskForm />
        </div>
        <TaskList />
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="colored"
        />
      </div>
    </TaskProvider>
  )
}
