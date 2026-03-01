// Rotas da API de produtos
const express = require('express');
const pool = require('../db');

const router = express.Router();

/**
 * GET /api/produtos
 * Retorna todos os produtos cadastrados no banco de dados
 */
router.get('/produtos', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM produtos_reis ORDER BY data_criacao DESC');
    connection.release();

    res.json({
      sucesso: true,
      dados: rows,
      total: rows.length
    });
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar produtos',
      erro: erro.message
    });
  }
});

/**
 * POST /api/produtos
 * Insere um novo produto no banco de dados
 * Espera receber: { nome, categoria, descricao }
 */
router.post('/produtos', async (req, res) => {
  try {
    const { nome, categoria, descricao } = req.body;

    // Validação básica dos campos obrigatórios
    if (!nome || !categoria) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Nome e categoria são obrigatórios'
      });
    }

    const connection = await pool.getConnection();
    const [resultado] = await connection.query(
      'INSERT INTO produtos_reis (nome, categoria, descricao) VALUES (?, ?, ?)',
      [nome, categoria, descricao || '']
    );
    connection.release();

    res.status(201).json({
      sucesso: true,
      mensagem: 'Produto cadastrado com sucesso',
      id: resultado.insertId
    });
  } catch (erro) {
    console.error('Erro ao inserir produto:', erro);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao cadastrar produto',
      erro: erro.message
    });
  }
});

module.exports = router;
