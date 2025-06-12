import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useTasks } from '../contexts/TaskContext'
import { TextField, Button } from '@mui/material'

const schema = yup.object({
  user_name: yup.string().required('Nome é obrigatório'),
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
})

type TaskFormInputs = yup.InferType<typeof schema>

export const TaskForm = () => {
  const { addTask } = useTasks()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: TaskFormInputs) => {
    await addTask({
      ...data,
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <TextField
        label="Nome do usuário"
        {...register('user_name')}
        error={!!errors.user_name}
        helperText={errors.user_name?.message}
      />

      <TextField
        label="Título da tarefa"
        {...register('title')}
        error={!!errors.title}
        helperText={errors.title?.message}
      />

      <TextField
        label="Descrição da tarefa"
        multiline
        rows={4}
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      <Button variant="contained" color="primary" type="submit">
        Adicionar Tarefa
      </Button>
    </form>
  )
}
