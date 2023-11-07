const Pessoa = require ("../models/Pessoa");

async function getHome(req,res,app) { 
    app.set('layout', './layouts/default/home');
    res.render('layouts/default/home');
}

module.exports = {getHome};