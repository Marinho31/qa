const dotenv = require('dotenv');
const result = dotenv.config({ path: '../.env' });

if (result.error) {
    console.error('Erro ao carregar o arquivo .env:', result.error);
    process.exit(1);
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Alterar a porta para 3000
const routes = require('./routes');
const mongoose = require('mongoose');

console.log('Connection String:', process.env.CONNECTION_STRING); // Adicione esta linha para depuração

if (!process.env.CONNECTION_STRING) {
    console.error('Erro: CONNECTION_STRING não está definida nas variáveis de ambiente.');
    process.exit(1);
}

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB realizada com sucesso');
        app.listen(port, (err) => {
            if (err) {
                console.error(`Erro ao iniciar o servidor na porta ${port}:`, err);
                process.exit(1);
            }
            console.log(`Acessar http://localhost:${port}`);
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true })); // Middleware para parsear o corpo das requisições
app.use(routes);