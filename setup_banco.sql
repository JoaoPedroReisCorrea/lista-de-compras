-- Script de criação do banco de dados e tabela para o projeto

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS web_03ma;

-- Usar o banco de dados
USE web_03ma;

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS produtos_reis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns dados de exemplo (opcional)
INSERT INTO produtos_reis (nome, categoria, descricao) VALUES
('Notebook Dell', 'Eletrônicos', 'Notebook de alta performance para trabalho e estudos'),
('Livro Clean Code', 'Livros', 'Guia essencial sobre código limpo e boas práticas'),
('Fone Bluetooth', 'Acessórios', 'Fone sem fio com bateria de longa duração');
