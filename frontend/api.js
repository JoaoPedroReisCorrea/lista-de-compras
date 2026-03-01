// Utilitário para comunicação com a API
const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Busca todos os produtos do backend
 */
async function obterProdutos() {
  try {
    const resposta = await fetch(`${API_BASE_URL}/produtos`);
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    
    const dados = await resposta.json();
    return dados.dados || [];
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    return [];
  }
}

/**
 * Envia um novo produto para o backend
 */
async function criarProduto(nome, categoria, descricao) {
  try {
    const resposta = await fetch(`${API_BASE_URL}/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        categoria,
        descricao
      })
    });
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    
    const dados = await resposta.json();
    return {
      sucesso: dados.sucesso,
      mensagem: dados.mensagem,
      id: dados.id
    };
  } catch (erro) {
    console.error('Erro ao criar produto:', erro);
    return {
      sucesso: false,
      mensagem: 'Erro ao cadastrar produto. Verifique se o servidor está rodando.'
    };
  }
}

/**
 * Exibe um alerta na página
 */
function exibirAlerta(tipo, mensagem, duracao = 3000) {
  const alerta = document.getElementById('alerta');
  if (!alerta) return;
  
  alerta.textContent = mensagem;
  alerta.className = `alerta alerta-${tipo} ativo`;
  
  if (duracao > 0) {
    setTimeout(() => {
      alerta.classList.remove('ativo');
    }, duracao);
  }
}

/**
 * Formata uma data para o formato brasileiro
 */
function formatarData(dataString) {
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
