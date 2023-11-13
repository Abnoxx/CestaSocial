const Solicitacao = require("../models/Solicitar");


function getSolicitar(req, res, app) {
    app.set('layout', './layouts/default/solicitar');
    res.render('layouts/default/solicitar', { erro: null });
}

 function solicitar(req, res) {
     const { nome, cpf, telefone, endereco, numeroDependentes, rendaMensal} = req.body;

    if(numeroDependentes <= -1){
        res.render("layouts/default/solicitar", { erro: "Numero de dependentes invalido" });
        return;
    }
    else if(telefone.length <=8 && telefone.length >= 10){
        res.render("layouts/default/solicitar", { erro: "Número de caracteres inválido" });
    }
    else if(cpf.length<=10 && cpf.length >= 12){
        res.render("layouts/default/solicitar", { erro: "Número de caracteres inválido" });
    }
    else{
        Solicitacao.create({ nome, cpf, telefone, endereco, numeroDependentes, rendaMensal})
        .then(() => {
            res.render("layouts/default/solicitar", { erro: "Solicitação enviada com sucesso" });
        })
    }
}
module.exports = { getSolicitar,solicitar };