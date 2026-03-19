const lineModel = require('../models/lineModel');

// CREATE
const createLine = async (req, res) => {
  try {
    const { 
      line_name, 
      line_number, 
      origin_line, 
      destination_line, 
      direction_line, 
      vehicle_number 
    } = req.body;

   const lineData = {
      line_name,
      line_number,
      origin_line,
      destination_line,
      direction_line,
      vehicle_number
    };

    const newLine = await lineModel.create(lineData);
    
    res.status(201).json(newLine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating bus line', error: error.message });
  }
};

// READ (All)
const getAllLine = async (req, res) => {
  try {
    const lines = await lineModel.findAll();
    res.status(200).json(lines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lines', error: error.message });
  }
};

// READ (id)
const getLineById = async (req, res) => {
  try {
    const { id } = req.params;
    const line = await lineModel.findById(id);

    if (!line) {
      return res.status(404).json({ message: 'Line not found.' });
    }
    res.status(200).json(line);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching line', error: error.message });
  }
};

// UPDATE
const updateLine = async (req, res) => {
  try {
    const { id } = req.params;
  const { 
      line_name, 
      line_number, 
      origin_line, 
      destination_line, 
      direction_line, 
      vehicle_number 
    } = req.body;

    // Verificamos se a linha existe antes de atualizar
    const lineExists = await lineModel.findById(id);
    if (!lineExists) {
      return res.status(404).json({ message: 'Bus line not found for update.' });
    }

    const updatedData = { 
      line_name, 
      line_number, 
      origin_line, 
      destination_line, 
      direction_line, 
      vehicle_number 
    };
    const updatedLine = await lineModel.update(id, updatedData);

    res.status(200).json(updatedLine);
  } catch (error) {
    res.status(500).json({ message: 'Error updating line', error: error.message });
  }
};

// DELETE
const deleteLine = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await lineModel.remove(id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Line not found for deletion.' });
    }
    
    // 204 = No Content (sucesso, mas não retorna nada, precisa adicionar mensagem)
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting line.', error: error.message });
  }
};

//exporta as funções
module.exports = {
  createLine,
  getAllLine,
  getLineById,
  updateLine,
  deleteLine
};