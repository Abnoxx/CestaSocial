const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize =  new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    //port:
    //url:
});
sequelize.authenticate().then(function(){
    console.log("Conectado com o banco de dados");
}).catch(function(erro){
    console.log("Falha ao conectar com banco de dados:" + erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize 
};