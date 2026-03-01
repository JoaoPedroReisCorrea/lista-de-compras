# 🚀 INSTRUÇÕES DE EXECUÇÃO - LEIA PRIMEIRO

## ✅ Checklist Pré-Requisitos

- [ ] MySQL instalado e rodando em `localhost:3306`
- [ ] Node.js instalado (versão 14+)
- [ ] Um editor de código (VS Code recomendado)

## 📋 Passos para Executar (10 minutos)

### PASSO 1: Criar o Banco de Dados (2 min)

**Opção A - Linha de Comando:**
```bash
mysql -u root -p < setup_banco.sql
```

**Opção B - MySQL Workbench ou phpMyAdmin:**
1. Abra o MySQL Workbench
2. Crie uma nova query
3. Cole o conteúdo de `setup_banco.sql`
4. Execute (Ctrl+Enter)

### PASSO 2: Instalar Dependências do Backend (3 min)

Abra o terminal na pasta `backend/`:

```bash
npm install
```

Aguarde até aparecer "added X packages"

### PASSO 3: Iniciar o Backend (2 min)

Ainda na pasta `backend/`:

```bash
npm start
```

Você verá:
```
✓ Conectado ao banco de dados com sucesso!
📱 Servidor rodando em http://localhost:3000
```

**⚠️ DEIXE ESTE TERMINAL ABERTO!** (não feche)

### PASSO 4: Abrir o Frontend (3 min)

**MELHOR OPÇÃO - Live Server (VS Code):**
1. Instale extensão "Live Server" no VS Code
2. Clique direito em `index.html`
3. Selecione "Open with Live Server"

**ALTERNATIVA - Abrir Arquivo Local:**
- Navegue até pasta do projeto no Windows Explorer
- Clique duplo em `index.html`

## 🎯 Testando o Sistema

### ✓ Página de Listagem
1. Vá para `index.html` (arquivo na raiz do projeto)
2. Deve mostrar 3 produtos de exemplo (ou vazio)

### ✓ Cadastro de Novo Produto
1. Clique em "Novo Produto"
2. Preencha:
   - Nome: "Seu Produto"
   - Categoria: "Eletrônicos"
   - Descrição: "Teste"
3. Clique em "Cadastrar"
4. Deve redirecionar para listagem
5. Novo produto aparece na lista

### ✓ Verificação no Banco
No MySQL, execute:
```sql
USE web_03ma;
SELECT * FROM produtos_reis;
```

Você verá todos os produtos cadastrados!

## 🔧 Solução de Problemas

### Erro: "Cannot connect to database"
- [ ] MySQL está aberto? (Verificar Services do Windows)
- [ ] Execute: `mysql -u root -p` para testar acesso
- [ ] Se tiver senha, atualize `backend/.env`

### Erro: "Cannot find module"
- Abra terminal em `backend/`
- Execute: `npm install`

### Frontend não carrega dados
- Verifique se backend está rodando (deve aparecer "✓ Conectado ao banco")
- Abra DevTools (F12) → Console
- Procure por erros em vermelho

### CORS Error no console
- Certifique-se que backend está rodando
- API deve estar em `http://localhost:3000`

## 📁 Arquivos Importantes

```
Atv lista de compras/
├── backend/
│   ├── server.js         ← Inicie aqui com: npm start
│   ├── routes/produtos.js ← Duas rotas: GET e POST
│   └── .env              ← Credenciais do MySQL
├── frontend/
│   ├── index.html        ← Página principal
│   ├── cadastro.html     ← Formulário
│   └── style.css         ← Design responsivo
├── setup_banco.sql       ← Execute isso no MySQL
└── README.md             ← Documentação completa
```

## 🎨 Resultado Esperado

### Interface
- **Header roxo/azul** com navegação
- **Cards com sombra** dos produtos
- **Formulário limpo** para novo produto
- **Alertas visuais** de sucesso/erro

### Funcionalidade
- ✓ Produtos aparecem ao abrir `index.html`
- ✓ Formulário envia para backend
- ✓ Dados persistem no MySQL
- ✓ Listagem atualiza automaticamente

## 💡 Dicas

1. **Feche o backend corretamente**: `Ctrl+C` no terminal
2. **Limpar dados**: Exclua todos os registros em MySQL:
   ```sql
   DELETE FROM produtos_reis;
   ```
3. **Ver logs**: Monitore o console do terminal do backend
4. **DevTools**: Abra F12 para ver requisições (Network)

## 📞 Próximas Etapas (Opcional)

Depois que funcionar, você pode:
- Adicionar funcionalidade de exclusão
- Implementar autenticação
- Fazer deploy em servidor
- Melhorar UI com animações

---

**Pronto para começar?** Siga o Checklist acima! ✨
