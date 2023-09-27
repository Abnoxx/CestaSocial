const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize =  new Sequelize('bddoacoes','root','vertrigo',{
    host: 'localhost',
    dialect: 'mysql',
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