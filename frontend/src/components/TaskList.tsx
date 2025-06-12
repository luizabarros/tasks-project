import { Card, CardContent, Typography } from '@mui/material'
import { useTasks } from '../contexts/TaskContext'

export const TaskList = () => {
  const { tasks } = useTasks()
  return (
    <div className="grid grid-cols-1 gap-4 p-4 max-w-3xl mx-auto">
      {tasks.map(task => (
        <Card key={task.id} className="bg-white shadow-md">
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="subtitle1" className="text-blue-600">Autor: {task.user_name}</Typography>
            <Typography variant="body1">{task.description}</Typography>
            <Typography variant="caption" className="text-gray-500">Criado em: {new Date(task.created_at).toLocaleDateString()}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
