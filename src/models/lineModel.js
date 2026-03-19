const pool = require('../config/db');

// Função para criar uma nova linha
const create = async (data) => {
  const { line_name, line_number, origin_line, destination_line, direction_line, vehicle_number } = data;
  const sql = 'INSERT INTO line (line_name, line_number, origin_line, destination_line, direction_line, vehicle_number) VALUES (?, ?, ?, ?, ?, ?)';
  
  const [result] = await pool.execute(sql, [line_name, line_number, origin_line, destination_line, direction_line, vehicle_number]);
  return { id_line: result.insertId, ...data };
};

// Função para buscar todas as linhas
const findAll = async () => {
  const [rows] = await pool.execute('SELECT * FROM line');
  return rows;
};

// Função para buscar uma linha pelo ID
const findById = async (id) => {
  const [rows] = await pool.execute('SELECT id_line, line_name, line_number, origin_line, destination_line, direction_line, vehicle_number FROM line WHERE id_line = ?', [id]);
  return rows[0];
};

// Função para editar uma linha pelo ID
const update = async (id, data) => {
  const { line_name, line_number, origin_line, destination_line, direction_line, vehicle_number } = data;
  const sql = 'UPDATE line SET line_name = ?, line_number = ?, origin_line = ?, destination_line = ?, direction_line = ?, vehicle_number = ? WHERE id_line = ?';
  
  await pool.execute(sql, [line_name, line_number, origin_line, destination_line, direction_line, vehicle_number, id]);
  return { id_line: id, ...data };
};

// Função para deletar uma linha pelo ID
const remove = async (id) => {
  const [result] = await pool.execute('DELETE FROM line WHERE id_line = ?', [id]);
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

