const Solicitacao = require('../models/Solicitar');
function concluir (req, res) {
    Solicitacao.destroy({where: {'id': req.params.id}}).then(function(){
        res.render('layouts/default/listagem');
        
    })
}
module.exports = {concluir};