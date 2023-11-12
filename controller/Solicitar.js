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
    else{
        Solicitacao.create({ nome, cpf, telefone, endereco, numeroDependentes, rendaMensal})
        .then(() => {
            res.render("layouts/default/solicitar", { erro: "Solicitação enviada com sucesso" });
        })
    }
}
module.exports = { getSolicitar,solicitar };