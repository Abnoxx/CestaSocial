const db = require('./db');

const Solicitacao = db.sequelize.define('solicitacao', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    numeroDependentes: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    rendaMensal: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Solicitacao;