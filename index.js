// index.js
require('dotenv').config(); // Carrega o .env logo no início
const express = require('express');
const lineRoutes = require('./src/routes/lineRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Habilita o parser de JSON do Express

// Rota principal de teste
app.get('/', (req, res) => {
  res.send('API do busão de pé!');
});

//app.use('/onibus-api', lineRoutes);
app.use(lineRoutes);
app.use(userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});