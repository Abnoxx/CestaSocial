const db = require('./db');

const Pessoa = db.sequelize.define('pessoa', {
    email: {
        type: db.Sequelize.STRING 
    },
    senha: {
        type: db.Sequelize.STRING
    }
});
Pessoa.autenticar = function(email, senha) {
    return Pessoa.findOne({ where: { email: email, senha: senha } })
        .then(person => {
            if (person) {
                return person;
            } else {
                return null;
            }
        })
        .catch(error => {
            throw error;
        });
};

Pessoa.getEmail = function(email) {
    return Pessoa.findOne({ where: { email: email } })
        .then(person => {
            if (person) {
                return person;
            } else {
                return null;
            }
        })
        .catch(error => {
            throw error;
        });
};

module.exports = Pessoa;