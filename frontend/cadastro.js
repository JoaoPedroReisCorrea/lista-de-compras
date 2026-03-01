// Script para a página de cadastro de produtos

/**
 * Valida os dados do formulário
 */
function validarFormulario(nome, categoria) {
  if (!nome || nome.trim().length === 0) {
    exibirAlerta('erro', '❌ O nome do produto é obrigatório');
    return false;
  }

  if (nome.trim().length < 3) {
    exibirAlerta('erro', '❌ O nome do produto deve ter pelo menos 3 caracteres');
    return false;
  }

  if (nome.trim().length > 100) {
    exibirAlerta('erro', '❌ O nome do produto não pode ultrapassar 100 caracteres');
    return false;
  }

  if (!categoria || categoria.trim().length === 0) {
    exibirAlerta('erro', '❌ A categoria é obrigatória');
    return false;
  }

  return true;
}

/**
 * Manipula o envio do formulário
 */
async function enviarFormulario(event) {
  event.preventDefault();

  // Obter valores do formulário
  const nome = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value.trim();
  const descricao = document.getElementById('descricao').value.trim();

  // Validar dados
  if (!validarFormulario(nome, categoria)) {
    return;
  }

  // Desabilitar botão de envio
  const botaoSubmit = event.target.querySelector('button[type="submit"]');
  botaoSubmit.disabled = true;
  botaoSubmit.textContent = '⏳ Enviando...';

  // Enviar para o backend
  const resultado = await criarProduto(nome, categoria, descricao);

  // Reabilitar botão
  botaoSubmit.disabled = false;
  botaoSubmit.textContent = '✓ Cadastrar Produto';

  if (resultado.sucesso) {
    // Sucesso!
    exibirAlerta('sucesso', `✅ ${resultado.mensagem}`);

    // Limpar o formulário
    document.getElementById('formulario-produto').reset();

    // Redirecionar para listagem após 2 segundos
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 2000);
  } else {
    // Erro
    exibirAlerta('erro', `❌ ${resultado.mensagem}`);
  }
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-produto');
  if (form) {
    form.addEventListener('submit', enviarFormulario);
  }

  // Focar no campo de nome
  document.getElementById('nome').focus();
});
