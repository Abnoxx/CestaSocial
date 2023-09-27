const Sequelize = require('sequelize');
const database = require('./db');
const pessoa = database.sequelize.define('pessoa',{
    nome:{
        type: database.Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type: database.Sequelize.INTEGER,
        allowNull:false
    },
    endereco:{
        type: database.Sequelize.STRING,
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
})

module.exports = pessoa;