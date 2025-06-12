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
![Badge do GitHub](https://file.notion.so/f/f/15583dc7-63ba-43c6-a5cd-a6f334af3e85/717f00b2-0934-4e2c-80c9-0643d7c50370/image.png?table=block&id=20ee7f5c-ac91-806a-b0ea-da59089110f0&spaceId=15583dc7-63ba-43c6-a5cd-a6f334af3e85&expirationTimestamp=1749772800000&signature=h-lLRHVMaGA37VTRLebREKSmsEi2UDYYrmjQXVC3py8&downloadName=image.png)

## 🚀 Como rodar o projeto

### 🔧 Requisitos

- [Docker](https://www.docker.com/) e Docker Compose **OU**
- Node.js (versão 18+) + PostgreSQL local

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

### 💻 Rodando localmente (sem Docker)

1. Instale as dependências: npm install
2. Configure seu banco de dados PostgreSQL local e adicione as variáveis no .env.
3. Rode as migrations e crie os modelos (Sequelize): npx sequelize-cli db:migrate
4. Inicie a aplicação: npm run dev

### 📬 Endpoints

Criar uma tarefa

POST /tasks
Content-Type: application/json

{
  "user_name": "Ana Luiza",
  "title": "Comprar pão",
  "description": "Ir na padaria até as 18h",
  "created_at": "2025-06-11"
}

Listar tarefas
GET /tasks

### 🧪 Testes
Para rodar os testes: npm run test

## Inicializar aplicação front-end
`npm start`
