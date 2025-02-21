const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeControler'); // Verifique o nome do arquivo
const contatoController = require('./controllers/contatoController');

route.get('/', homeController.paginaInicial);

route.post('/submit', homeController.trataPost);

route.get('/contato', contatoController.contatoInicial);

module.exports = route;