const HomeModel = require('../models/HomeModel');

HomeModel.create({
    title: 'Outro título de teste',
    description: 'Outra descrição de teste'
})
    .then(data => console.log(data))
    .catch(e => console.log(e));


module.exports.paginaInicial = (req, res) => {
    res.send('<form action="/submit" method="POST">' +
        'Nome:<input type="text" name="nome"><button>Enviar</button></form>');
}

module.exports.trataPost = (req, res) => {
    res.send('Formulário enviado com sucesso!');
};