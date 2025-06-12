# 📌 Task Manager API

Este é um projeto backend construído com Node.js, Express, Sequelize e TypeScript. A API permite criar e listar tarefas, associando-as a usuários.

## ✅ Funcionalidades

- Criar tarefas com título, descrição, data e nome do usuário.
- Listar todas as tarefas.
- Criação automática de usuário se ele não existir.
- Validação de dados.
- Tratativa genérica de erros.
- Testes com Jest.

---

## Modelagem do banco de dados 
- A escolha de duas tabelas (users e tasks) ocorreu porque observei que, se eu colocasse o nome do usuário em tasks, isso geraria redundância na tabela.
- A redundância poderia causar futuros problemas de desempenho, bem como afetaria a manutenção.
![image](https://github.com/user-attachments/assets/d9a8995c-6cfe-401e-8f7f-3679f27eedeb)

## Acessando pelo DBEAVER
![image](https://github.com/user-attachments/assets/c8bd6f26-2af2-42c0-98c7-2bb798555c02)

## 🚀 Como rodar o projeto

### 🔧 Requisitos

- [Docker](https://www.docker.com/) e Docker Compose **OU**
- Node.js (versão 18+) + PostgreSQL local
- Entrar na pasta backend e frontend para fazer o npm install (instalar as dependências)
---

### 🐳 Usando Docker (recomendado)

1. Clone o repositório

```bash
git clone https://github.com/luizabarros/task-manager.git
cd task-manager
```

2. Crie o arquivo .env
3. Suba a aplicação:  docker-compose up --build
4. A API estará disponível em: http://localhost:3000

### 📬 Endpoints

Criar uma tarefa

POST /tasks
Content-Type: application/json

{
  "user_name": "Ana Luiza",
  "title": "Comprar pão",
  "description": "Ir na padaria até as 18h",
}

Listar tarefas
GET /tasks

### 🧪 Testes
Para rodar os testes: npm run test

## Inicializar aplicação front-end
`npm start`
