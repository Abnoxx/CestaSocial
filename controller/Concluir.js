const Solicitacao = require('../models/Solicitar');

function concluir (req, res) {
    Solicitacao.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/admin/solicitacoes/listagem');
    }).catch(function(err){
        res.send("Esta solicitação não existe! "+ err);
    });
}
module.exports = {concluir};