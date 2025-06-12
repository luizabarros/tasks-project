import { Card, CardContent, Typography, Skeleton } from '@mui/material'
import { useTasks } from '../../contexts/TaskContext'
import './styles.css'

export const TaskList = () => {
  const { tasks, loading } = useTasks()
  return (
    <div className="task-list-container">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="task-card">
              <CardContent>
                <Skeleton variant="text" width="450px" height={50} />
                <Skeleton variant="text" width="450px" height={20} />
                <Skeleton variant="text" width="450px" height={20} />
                <Skeleton variant="text" width="450px" height={20} />
              </CardContent>
            </Card>
          ))
        : tasks.map(task => (
            <Card key={task.id} className="task-card">
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="subtitle1" className="task-author">
                  Autor: {task.user.user_name}
                </Typography>
                <Typography variant="body1">{task.description}</Typography>
                <Typography variant="caption" className="task-date">
                  Criado em: {new Date(task.created_at).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))}
    </div>
  )
}
