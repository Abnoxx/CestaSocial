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
        res.render("layouts/default/solicitar", { erro: "Número de caracteres de telefone inválido" });
    }
    else if(cpf.length<=10 && cpf.length >= 12){
        res.render("layouts/default/solicitar", { erro: "Número de caracteres do cpf inválido" });
    }
    else{
        Solicitacao.create({ nome, cpf, telefone, endereco, numeroDependentes, rendaMensal})
        .then(() => {
            res.redirect("/home");
        })
    }
}
module.exports = { getSolicitar,solicitar };