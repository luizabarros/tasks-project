import { Request, Response, NextFunction } from 'express';
import * as taskController from '../controllers/taskController';
import * as taskService from '../services/taskService';

jest.mock('../services/taskService');

describe('Task Controller', () => {
  const mockJson = jest.fn();
  const mockStatus = jest.fn(() => ({ json: mockJson }));
  const mockRes = { status: mockStatus, json: mockJson } as unknown as Response;
  const mockNext = jest.fn() as NextFunction;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar uma tarefa com sucesso (createTask)', async () => {
    const mockTask = { id: 1, title: 'Tarefa Teste' };
    (taskService.createTask as jest.Mock).mockResolvedValue(mockTask);

    const mockReq = {
      body: {
        user_name: 'Teste User',
        title: 'Tarefa Teste',
        description: 'Descrição da tarefa',
      },
    } as Request;

    await taskController.createTask(mockReq, mockRes, mockNext);

    expect(taskService.createTask).toHaveBeenCalledWith(mockReq.body);
    expect(mockStatus).toHaveBeenCalledWith(201);
    expect(mockJson).toHaveBeenCalledWith(mockTask);
  });

  it('deve retornar lista de tarefas (listTasks)', async () => {
    const mockTasks = [{ id: 1, title: 'Tarefa 1' }];
    (taskService.listTasks as jest.Mock).mockResolvedValue(mockTasks);

    const mockReq = {} as Request;

    await taskController.listTasks(mockReq, mockRes, mockNext);

    expect(taskService.listTasks).toHaveBeenCalled();
    expect(mockJson).toHaveBeenCalledWith(mockTasks);
  });
});
