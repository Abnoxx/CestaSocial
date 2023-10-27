const database = require('./db');
const Solicitacao = database.sequelize.define('solicitacao',{
    endereco:{
        type: database.Sequelize.STRING,
        allowNull:false
    },
    rendaMensal:{
        type: database.Sequelize.INTEGER,
        allowNull:false
    },
    numeroDependentes:{
        type: database.Sequelize.INTEGER,
        allowNull:false
    },
    nomePessoa:{
        type: database.Sequelize.STRING,
    },
    senhaPessoa:{
        type: database.Sequelize.STRING,
        allowNull:false
    }
});
Solicitacao.sync({force:true});

/*Solicitacao.autenticar = function (endereco, rendaMensal, numeroDependentes, nomePessoa, senhaPessoa){
    return Solicitacao.findOne({
        where:{
            endereco:endereco,
            rendaMensal:rendaMensal,
            numeroDependentes:numeroDependentes,
            nomePessoa:nomePessoa,
            senhaPessoa:senhaPessoa
        }
    }).then(function (solicitacao){
        if(solicitacao){
            return solicitacao;
        }
        return null;
    }).catch(function (err){
        console.log("Erro ao autenticar solicitacao: " + err);
    })
}*/

module.exports = Solicitacao;