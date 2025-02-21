module.exports.contatoInicial = (req, res) => {
    res.send('Deixe seu contato aqui!' + 
        '<form action="/submit" method="POST">' +
        'Nome:<input type="text" name="nome"><br>' +
        'Telefone:<input type="text" name="telefone"><br>' +
        'Email:<input type="email" name="email"><br>' +
        '<button>Enviar</button></form>'
    );
}

module.exports.trataPostContato = (req, res) => {
    res.send('Contato enviado com sucesso!');
};


