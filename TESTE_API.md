# Exemplos de Teste da API - Executar no PowerShell/Terminal

## Antes de testar:
# 1. Certifique-se que o backend está rodando: npm start
# 2. Use PowerShell (Windows) ou Terminal (Mac/Linux)

## ============================================================
## TESTE 1: Verificar se a API está respondendo
## ============================================================

# PowerShell:
Invoke-WebRequest -Uri "http://localhost:3000" | ConvertFrom-Json | ConvertTo-Json -Depth 10

# Ou curl (se instalado):
curl http://localhost:3000


## ============================================================
## TESTE 2: Buscar todos os produtos (GET)
## ============================================================

# PowerShell:
$response = Invoke-WebRequest -Uri "http://localhost:3000/api/produtos"
$response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10

# Esperado:
#{
#  "sucesso": true,
#  "dados": [
#    {
#      "id": 1,
#      "nome": "Notebook Dell",
#      "categoria": "Eletrônicos",
#      "descricao": "Notebook de alta performance...",
#      "data_criacao": "2026-03-01T13:30:45.000Z"
#    }
#  ],
#  "total": 1
#}


## ============================================================
## TESTE 3: Cadastrar um novo produto (POST)
## ============================================================

# PowerShell:
$body = @{
    nome = "Monitor LG 24"
    categoria = "Eletrônicos"
    descricao = "Monitor Full HD com entrada HDMI"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:3000/api/produtos" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body

$response.Content | ConvertFrom-Json | ConvertTo-Json

# Esperado:
#{
#  "sucesso": true,
#  "mensagem": "Produto cadastrado com sucesso",
#  "id": 2
#}


## ============================================================
## TESTE 4: Teste com curl (se disponível)
## ============================================================

# Buscar produtos:
curl -X GET http://localhost:3000/api/produtos

# Cadastrar produto:
curl -X POST http://localhost:3000/api/produtos ^
  -H "Content-Type: application/json" ^
  -d "{\"nome\":\"Teclado Mecânico\",\"categoria\":\"Acessórios\",\"descricao\":\"Teclado RGB\"}"


## ============================================================
## TESTE 5: Teste com Thunder Client / Postman
## ============================================================

# Se usar Postman, configure assim:
# 
# GET Request:
# URL: http://localhost:3000/api/produtos
# Headers: (nenhum necessário)
#
# POST Request:
# URL: http://localhost:3000/api/produtos
# Method: POST
# Headers: Content-Type: application/json
# Body (raw JSON):
# {
#   "nome": "Seu Produto",
#   "categoria": "Sua Categoria",
#   "descricao": "Descrição aqui"
# }


## ============================================================
## TESTE 6: Verificar no Banco de Dados
## ============================================================

# MySQL:
mysql -u root -p web_03ma
SELECT * FROM produtos_reis;


## ============================================================
## TESTE 7: Teste da Interface (Manual)
## ============================================================

# 1. Abra o navegador em: frontend/index.html
# 2. Verifique se os produtos aparecem
# 3. Clique em "Novo Produto"
# 4. Preencha o formulário
# 5. Clique "Cadastrar"
# 6. Confirme redirecionamento e novo produto na listagem


## ============================================================
## CÓDIGOS DE ERRO ESPERADOS
## ============================================================

# 200 OK
# └─ GET /api/produtos retornou sucesso

# 201 Created
# └─ POST /api/produtos criou novo produto

# 400 Bad Request
# └─ Faltam campos obrigatórios (nome ou categoria)

# 500 Internal Server Error
# └─ Erro no servidor (verifique banco de dados)

# 404 Not Found
# └─ Rota não existe


## ============================================================
## DICAS DE DEBUGGING
## ============================================================

# Se a API não responder:
# 1. Verifique: npm start está rodando? (deve aparecer a mensagem de sucesso)
# 2. Verifique: MySQL está rodando?
# 3. Abra DevTools do navegador (F12) → Console
# 4. Procure por erros em vermelho

# Se os dados não persistem:
# 1. Verifique conexão com MySQL
# 2. Confirme que a tabela "produtos_reis" existe
# 3. Execute: SELECT * FROM produtos_reis; no MySQL

# Se recebe "Cannot POST":
# 1. Confirme que a rota é /api/produtos (com /api)
# 2. Confirme que é POST, não GET
# 3. Confirme que o Content-Type é application/json
