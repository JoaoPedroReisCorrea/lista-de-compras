// Script para a página de listagem de produtos
let produtos = [];

/**
 * Carrega os produtos do backend ao abrir a página
 */
async function carregarProdutos() {
  const conteudo = document.getElementById('conteudo-listagem');
  conteudo.innerHTML = '<p style="text-align: center; color: #636e72;">⏳ Carregando produtos...</p>';

  // Simular pequeno delay para melhor UX
  await new Promise(resolve => setTimeout(resolve, 300));

  produtos = await obterProdutos();
  renderizarProdutos();
}

/**
 * Renderiza os produtos na página
 */
function renderizarProdutos() {
  const conteudo = document.getElementById('conteudo-listagem');

  if (produtos.length === 0) {
    conteudo.innerHTML = `
      <div class="estado-vazio">
        <h2>📭 Nenhum produto cadastrado</h2>
        <p>Comece adicionando um novo produto clicando no botão abaixo.</p>
        <br>
        <a href="cadastro.html" class="btn btn-primario">+ Cadastrar Produto</a>
      </div>
    `;
    return;
  }

  // Construir grid de produtos
  let html = '<div class="grid-produtos">';
  
  produtos.forEach(produto => {
    const dataCriacao = formatarData(produto.data_criacao);
    
    html += `
      <div class="card-produto">
        <div class="card-header">
          <h3 class="card-titulo">${escapeHtml(produto.nome)}</h3>
          <span class="card-categoria">${escapeHtml(produto.categoria)}</span>
        </div>
        <div class="card-body">
          <p class="card-descricao">${escapeHtml(produto.descricao || 'Sem descrição')}</p>
          <p class="card-data">📅 ${dataCriacao}</p>
        </div>
      </div>
    `;
  });

  html += '</div>';
  conteudo.innerHTML = html;
}

/**
 * Escapa caracteres especiais para evitar injeção HTML
 */
function escapeHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

/**
 * Atualiza a página (útil quando voltando do cadastro)
 */
function atualizarListagem() {
  carregarProdutos();
}

// Carregar produtos ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  carregarProdutos();

  // Atualizar a cada 10 segundos para refletir novos produtos
  setInterval(carregarProdutos, 10000);
});
