const adminPass = 'tfteambjj2014';

function getAdminLogin (req, res, app){
    app.set('layout', './layouts/default/adminLogin');
    res.render('layouts/default/adminLogin', { erro: null });
}

function adminLogin (req, res, app){
    const passcode = req.body.passcode;
    if(passcode !== adminPass){
       res.render("adminLogin", { erro: "Senha Incorreta" });
    }else if(passcode === adminPass){
         res.redirect('/solicitacoes/listagem');
    }
}

module.exports = { getAdminLogin, adminLogin };