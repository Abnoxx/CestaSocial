const database = require('./db');
const Pessoa = database.sequelize.define('pessoa',{
    nome:{
        type: database.Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type: database.Sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type: database.Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type: database.Sequelize.STRING,
        allowNull:false
    }
});

Pessoa.autenticar = function (nome, cpf, email, senha){
    return Pessoa.findOne({
        where:{
            nome:nome,
            cpf:cpf,
            email:email,
            senha:senha
        }
    }).then(function (pessoa){
        if(pessoa){
            return pessoa;
        }
        return null;
    }).catch(function (err){
        console.log("Erro ao autenticar pessoa: " + err);
    })
}

Pessoa.getEmail = function(email) {
    return Pessoa.findOne({ where: { email: email } })
        .then(user => {
            if (user) {
                return user;
            } else {
                return null;
            }
        })
        .catch(error => {
            throw error;
        });
};

module.exports = Pessoa;