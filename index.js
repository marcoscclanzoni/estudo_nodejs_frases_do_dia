const express = require('express');
const app = express();

/**
 * Cors é uma biblioteca que você vai aprender mais a frete
 * Ela foi utilizada neste projeto para que você consiga utilizar a aplicação
 * React localmente sem gerar erro.
 */ 
    var cors = require('cors')
    app.use(cors())

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})