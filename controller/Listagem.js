const Solicitacao = require('../models/Solicitar');

function getListagem (req,res,app){
    Solicitacao.findAll({ where: { status: null } }) // Filtra as solicitações que não foram atendidas ainda
        .then(function (solicitacoes) {
            app.set('layout', './layouts/default/listagem');
            res.render('layouts/default/listagem', { solicitacoes: solicitacoes });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar as solicitações');
        });
  }


  function getInfos (req,res,app){
    Solicitacao.findOne({where: {'id': req.params.id}}).then(function(solicitacao){
        app.set('layout', './layouts/default/infos');
        res.render('layouts/default/infos', {solicitacao: solicitacao });
      }).catch(err => {
        console.error(err);
        res.status(500).send('Erro ao buscar a solicitação');
    });
}

function aceitarSolicitacao(req, res) {
    Solicitacao.findOne({where: {'id': req.params.id}})
        .then((solicitacao) => {
            if (!solicitacao) {
                return res.status(404).send('Solicitação não encontrada');
            }

            // Atualiza o status para aceito (status = 1)
            solicitacao.status = 1;

            return solicitacao.save()
                .then(() => {
                    res.redirect('/admin/solicitacoes/listagem'); // Redireciona para a página de solicitações 
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('Erro ao atualizar a solicitação');
                });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar a solicitação');
        });
}

function negarSolicitacao(req, res) {

    Solicitacao.findOne({where: {'id': req.params.id}})
        .then((solicitacao) => {
            if (!solicitacao) {
                return res.status(404).send('Solicitação não encontrada');
            }

            // Atualiza o status para negado (status = 0)
            solicitacao.status = 0;

            return solicitacao.save()
                .then(() => {
                    res.redirect('/admin/solicitacoes/listagem'); // Redireciona para a página de solicitações negadas
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('Erro ao atualizar a solicitação');
                });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar a solicitação');
        });
}

function getAceitas (req,res,app){
    Solicitacao.findAll({where: {'status': 1}}).then(function(solicitacoes){
        app.set('layout', './layouts/default/statusAtendido');
        res.render('layouts/default/statusAtendido', {solicitacoes: solicitacoes });
    });
  };

function getNegadas (req,res,app){
    Solicitacao.findAll({where: {'status': 0}}).then(function(solicitacoes){
        app.set('layout', './layouts/default/statusNaoAtendido');
        res.render('layouts/default/statusNaoAtendido', {solicitacoes: solicitacoes });
    });
  }

module.exports = {getListagem, getInfos, aceitarSolicitacao, negarSolicitacao, getAceitas, getNegadas};