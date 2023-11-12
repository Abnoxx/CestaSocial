const Solicitacao = require('../models/Solicitar');
function getListagem(req,res,app){
        app.set('layout', './layouts/default/listagem');
        res.render('layouts/default/listagem');
}
function postListagem (req,res,app){
    Solicitacao.findAll().then(function(solicitacoes){
        app.set('layout', './layouts/default/listagem');
        res.render('layouts/default/listagem', {solicitacoes:solicitacoes});
    });
}

module.exports = {getListagem, postListagem};