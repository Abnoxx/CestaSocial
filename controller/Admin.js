const Admin = require('../models/Admin');

function getAdminLogin (req, res, app){
    app.set('layout', './layouts/default/adminLogin');
    res.render('layouts/default/adminLogin', { erro: null });
}

function adminLogin (req, res, app){
    const passcode = Admin.findOne({ where: { 'senha': req.body.senha } });
    if(passcode !== Admin.findOne({where: {'senha': req.params.senha}})){
       res.render("adminLogin", { erro: "Senha Incorreta" });
    }else if(passcode === adminPass){
         res.redirect('admin/home');
    }
}

function getListagem(req,res,app){
    app.set('layout', './layouts/default/listagem');
    res.render('layouts/default/listagem', { erro: null });
}

function getAdminHome(req,res,app){
    app.set('layout', './layouts/default/adminHome');
    res.render('layouts/default/adminHome', { erro: null });
}
module.exports = { getAdminLogin, adminLogin, getListagem, getAdminHome };