const pool = require('../config/db');

// Função para criar uma nova linha
const create = async (data) => {
  const { user_name, favorite_line } = data;
  const sql = 'INSERT INTO user (user_name, favorite_line) VALUES (?, ?)';
  
  const [result] = await pool.execute(sql, [user_name, favorite_line]);
  return { id_user: result.insertId, ...data };
};

// Função para buscar todas as linhas
const findAll = async () => {
  const [rows] = await pool.execute('SELECT * FROM user');
  return rows;
};

// Função para buscar uma linha pelo ID
const findById = async (id) => {
  const [rows] = await pool.execute('SELECT id_user, user_name, favorite_line FROM user WHERE id_user = ?', [id]);
  return rows[0];
};

// Função para editar uma linha pelo ID
const update = async (id, data) => {
  const { user_name, favorite_line } = data;
  const sql = 'UPDATE user SET user_name = ?, favorite_line = ? WHERE id_user = ?';
  
  await pool.execute(sql, [user_name, favorite_line, id]);
  return { id_user: id, ...data };
};

// Função para deletar uma linha pelo ID
const remove = async (id) => {
  const [result] = await pool.execute('DELETE FROM user WHERE id_user = ?', [id]);
  return result.affectedRows;
};

// Exporta as funções
module.exports = {
  create, 
  findAll,
  findById,
  update,
  remove
};