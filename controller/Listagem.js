const Solicitacao = require('../models/Solicitar');

function getListagem (req,res,app){
    Solicitacao.findAll().then(function(solicitacoes){
        app.set('layout', './layouts/default/listagem');
        res.render('layouts/default/listagem', {solicitacoes: solicitacoes });
    });
  }


  function getInfos (req,res,app){
    Solicitacao.findOne({where: {'id': req.params.id}}).then(function(solicitacoes){
        app.set('layout', './layouts/default/infos/:id');
        res.render('layouts/default/infos', {solicitacoes: solicitacoes });
      }).catch(err => {
        console.error(err);
        res.status(500).send('Erro ao buscar a solicitação');
    });
}

module.exports = {getListagem, getInfos};