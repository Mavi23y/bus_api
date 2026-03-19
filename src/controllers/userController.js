const userModel = require('../models/userModel');

// CREATE
const createUser = async (req, res) => {
  try {
    const { 
      user_name, 
      favorite_line 
    } = req.body;

    const userData = {
      user_name,
      favorite_line
    };

    const newUser = await userModel.create(userData);
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// READ (All)
const getAllUser = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// READ (id)
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      user_name, 
      favorite_line 
    } = req.body;

    // Verificamos se a linha existe antes de atualizar
    const userExists = await userModel.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found for update.' });
    }

    const updatedData = { 
      user_name, 
      favorite_line 
    };
    const updatedUser = await userModel.update(id, updatedData);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await userModel.remove(id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found for deletion.' });
    }
    
    // 204 = No Content (sucesso, mas não retorna nada, precisa adicionar mensagem)
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user.', error: error.message });
  }
};

//exporta as funções
module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
};