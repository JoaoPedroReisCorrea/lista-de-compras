# 📦 Sistema de Gerenciamento de Produtos

Um projeto web completo para cadastro e listagem de produtos, com frontend moderno, backend em Node.js/Express e banco de dados MySQL.

## 🎯 Características

- ✅ **Frontend Responsivo**: Duas páginas interligadas (Listagem e Cadastro)
- ✅ **Design Moderno**: CSS estilizado com paleta harmoniosa (roxo, azul e verde)
- ✅ **API RESTful**: Backend com Express e MySQL
- ✅ **Validação**: Formulário com validação básica
- ✅ **Persistência**: Dados armazenados no banco web_03ma
- ✅ **Feedback Visual**: Alertas de sucesso e erro

## 📁 Estrutura do Projeto

```
Atv lista de compras/
├── backend/
│   ├── routes/
│   │   └── produtos.js       # Rotas GET e POST
│   ├── server.js             # Servidor Express principal
│   ├── db.js                 # Configuração do banco de dados
│   ├── package.json          # Dependências Node.js
│   └── .env                  # Variáveis de ambiente
├── frontend/
│   ├── cadastro.html         # Página de cadastro
│   ├── api.js                # Utilitários para chamadas à API
│   ├── listagem.js           # Lógica da página de listagem
│   ├── cadastro.js           # Lógica da página de cadastro
├── index.html                # Página de listagem (deploy no root)
├── style.css                 # Estilos globais
├── setup_banco.sql           # Script para criar banco e tabela
└── README.md                 # Este arquivo
```

## 🚀 Como Executar

### 1️⃣ Preparar o Banco de Dados

**Windows (MySQL instalado):**
```bash
mysql -u root -p < setup_banco.sql
```

Ou execute o SQL manualmente no phpMyAdmin/MySQL Workbench:
- Copie o conteúdo de `setup_banco.sql`
- Execute no seu cliente MySQL

**Importante**: Certifique-se de que MySQL está rodando e ajuste as credenciais em `backend/.env` se necessário.

### 2️⃣ Instalar Dependências do Backend

```bash
cd backend
npm install
```

Dependências instaladas:
- `express` - Framework web
- `mysql2` - Driver MySQL
- `cors` - Suporte a CORS
- `dotenv` - Variáveis de ambiente

### 3️⃣ Configurar Variáveis de Ambiente (Opcional)

O arquivo `backend/.env` já contém configurações padrão:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=web_03ma
PORT=3000
```

Se seus dados de MySQL forem diferentes, atualize o arquivo.

### 4️⃣ Iniciar o Backend

```bash
# No diretório backend/
npm start
```

Ou em modo desenvolvimento (com auto-reload):
```bash
npm run dev
```

Você deve ver:
```
✓ Conectado ao banco de dados com sucesso!
📱 Servidor rodando em http://localhost:3000
```

### 5️⃣ Abrir o Frontend

Existem várias opções:

**Opção A: Usar Live Server (recomendado)**
- Instale a extensão "Live Server" no VS Code
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

**Opção B: Abrir arquivo local**
- Abra `index.html` diretamente no navegador
- `Ctrl+O` (Windows) ou `Cmd+O` (Mac)

**Opção C: Usar Python (linha de comando)**
```bash
# ajuste se estiver usando servidor local (arquivo na raiz)
python -m http.server 5500
```
Depois acesse `http://localhost:5500`

## 🎨 Funcionalidades

### Página de Listagem (`index.html`)
- Exibe todos os produtos cadastrados em cards
- Atualiza automaticamente a cada 10 segundos
- Mostra mensagem quando não há produtos
- Cards com informações: Nome, Categoria, Descrição e Data

### Página de Cadastro (`cadastro.html`)
- Formulário com campos: Nome, Categoria, Descrição
- Validação de campos obrigatórios
- Categorias pré-definidas
- Feedback visual de sucesso/erro
- Redirecionamento automático após sucesso

## 🔌 API (Backend)

### GET `/api/produtos`
Retorna todos os produtos cadastrados.

**Resposta (200 OK):**
```json
{
  "sucesso": true,
  "dados": [
    {
      "id": 1,
      "nome": "Notebook Dell",
      "categoria": "Eletrônicos",
      "descricao": "Notebook de alta performance",
      "data_criacao": "2026-03-01 10:30:45"
    }
  ],
  "total": 1
}
```

### POST `/api/produtos`
Cria um novo produto.

**Dados esperados:**
```json
{
  "nome": "Produto X",
  "categoria": "Categoria",
  "descricao": "Descrição opcional"
}
```

**Resposta (201 Created):**
```json
{
  "sucesso": true,
  "mensagem": "Produto cadastrado com sucesso",
  "id": 2
}
```

## 📊 Banco de Dados

### Tabela `produtos_reis`
```sql
CREATE TABLE produtos_reis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Campos:**
- `id`: Identificador único (auto-incrementado)
- `nome`: Nome do produto (obrigatório)
- `categoria`: Categoria do produto (obrigatório)
- `descricao`: Descrição detalhada (opcional)
- `data_criacao`: Timestamp automático

## 🎨 Design

### Paleta de Cores
- **Primária**: #6c5ce7 (Roxo)
- **Secundária**: #0984e3 (Azul)
- **Destaque**: #00b894 (Verde)
- **Fundo**: #f5f6fa (Cinza claro)
- **Texto**: #2d3436 (Cinza escuro)

### Tipografia
- Font Stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Espaçamento consistente
- Bordas arredondadas (12px)
- Sombras leves para profundidade

### Responsividade
- Desktop: Grid de 3 colunas
- Tablet: Grid de 2 colunas (768px)
- Mobile: 1 coluna (480px)

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Backend**: Node.js, Express.js
- **Banco de Dados**: MySQL
- **Comunidade**: Open Source

## ⚠️ Troubleshooting

### Erro: "Cannot find module 'express'"
```bash
cd backend
npm install
```

### Erro: "Conectado ao banco de dados falhou"
- Verifique se MySQL está rodando
- Confirme credenciais em `.env`
- Execute `setup_banco.sql`

### Erro: "CORS policy"
- Certifique-se de que o backend está rodando em `localhost:3000`
- Frontend deve estar em `localhost:3000` (ou porta similar via Live Server)

### Formulário não envia dados
- Verifique se backend está rodando (`npm start`)
- Abra DevTools (F12) → Console para ver erros
- Confirme que a URL da API em `api.js` está correta

## 📝 Notas de Desenvolvimento

- Código comentado em pontos-chave para facilitar compreensão
- Separação clara entre frontend e backend
- Validação básica em ambos os lados
- Tratamento simples de erros
- Retorno JSON em todas as rotas

## 📄 Licença

Este projeto é fornecido como exemplo educacional.

---

**Desenvolvido em:** 01 de Março de 2026
**Versão:** 1.0.0
