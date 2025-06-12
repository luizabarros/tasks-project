import * as taskService from '../services/taskService';
import { User } from '../models/User';
import { Task } from '../models/Task';

describe('Task Service', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('deve criar uma nova tarefa e um novo usuário se necessário', async () => {
    const mockUser = { id: 1, user_name: 'Novo Usuário' };
    const mockTask = { id: 1, title: 'Tarefa Teste' };

    jest.spyOn(User, 'findOne').mockResolvedValue(null as any);
    jest.spyOn(User, 'create').mockResolvedValue(mockUser as any);
    jest.spyOn(Task, 'create').mockResolvedValue(mockTask as any);

    const result = await taskService.createTask({
      user_name: 'Novo Usuário',
      title: 'Tarefa Teste',
      description: 'Descrição teste',
    });

    expect(User.findOne).toHaveBeenCalledWith({ where: { user_name: 'Novo Usuário' } });
    expect(User.create).toHaveBeenCalledWith({ user_name: 'Novo Usuário' });
    expect(Task.create).toHaveBeenCalledWith({
      user_id: mockUser.id,
      title: 'Tarefa Teste',
      description: 'Descrição teste',
      created_at: expect.any(Date),
    });

    expect(result).toEqual(mockTask);
  });

  it('deve listar tarefas com usuários associados', async () => {
    const mockTasks = [{ id: 1, title: 'Tarefa', User: { user_name: 'Teste' } }];

    jest.spyOn(Task, 'findAll').mockResolvedValue(mockTasks as any);

    const result = await taskService.listTasks();

    expect(Task.findAll).toHaveBeenCalledWith({
      include: [{ model: User, attributes: ['user_name'] }],
    });

    expect(result).toEqual(mockTasks);
  });
});
