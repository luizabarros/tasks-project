import request from 'supertest';
import app from '../app';

describe('Testando endpoints de tarefas', () => {
  it('POST /api/tasks cria uma tarefa', async () => {
    const res = await request(app).post('/api/tasks').send({
      user_name: 'Teste User',
      title: 'Tarefa Teste',
      description: 'Descrição da tarefa de teste',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /api/tasks retorna lista', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
