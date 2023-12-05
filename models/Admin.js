const db = require('./db');

const Admin = db.sequelize.define('admin', {
    email: {
        type: db.Sequelize.STRING 
    },
    senha: {
        type: db.Sequelize.STRING
    }
});


module.exports = Admin;