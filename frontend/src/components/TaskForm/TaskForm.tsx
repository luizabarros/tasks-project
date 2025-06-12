import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useTasks } from '../../contexts/TaskContext'

import { TextField, Button } from '@mui/material'
import { CircularProgress } from '@mui/material'

import './styles.css'
import { useEffect, useState } from 'react'

const schema = yup.object({
  user_name: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter pelo menos 3 caracteres'),
  title: yup.string().required('Título é obrigatório').min(3, 'Título deve ter pelo menos 3 caracteres'),
  description: yup.string().required('Descrição é obrigatória').min(3, 'Descrição deve ter pelo menos 3 caracteres'),
})

type TaskFormInputs = yup.InferType<typeof schema>

export const TaskForm = () => {
  const { addTask, loading } = useTasks()
  const [loader, setLoader] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: TaskFormInputs) => {
    try {
      await addTask({ ...data })
      reset()
    } catch (error) {
      console.error('Erro ao adicionar tarefa.')
    }
  }

  useEffect(() => {
    setLoader(loading ?? false)
  }, [loading])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="task-form">
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

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loader}
        startIcon={loader ? <CircularProgress size={20} /> : null}
      >
        {loader ? 'Adicionando...' : 'Adicionar Tarefa'}
      </Button>
    </form>
  )
}
