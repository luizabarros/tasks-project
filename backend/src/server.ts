import app from './app';
import sequelize from './models';

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Banco sincronizado');
    
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar servidor', error);
  }
};

start();
