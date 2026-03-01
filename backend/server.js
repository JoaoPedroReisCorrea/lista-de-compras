// Servidor Express principal
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Importar as rotas
const produtosRoutes = require('./routes/produtos');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging simples de requisições
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas da API
app.use('/api', produtosRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({
    mensagem: 'Bem-vindo à API de Produtos!',
    versao: '1.0.0',
    rotas: {
      'GET /api/produtos': 'Retorna todos os produtos',
      'POST /api/produtos': 'Insere um novo produto'
    }
  });
});

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n📱 Servidor rodando em http://localhost:${PORT}`);
  console.log(`Acesse http://localhost:${PORT} para informações da API\n`);
});
