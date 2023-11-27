const adminPass = 'tfteam2014';

function getAdminLogin (req, res, app){
    app.set('layout', './layouts/default/adminLogin');
    res.render('layouts/default/adminLogin', { erro: null });
}

function adminLogin (req, res, app){
    const passcode = req.body.passcode;
    if(passcode !== adminPass){
       res.render("adminLogin", { erro: "Senha Incorreta" });
    }else if(passcode === adminPass){
         res.redirect('admin/solicitacoes/listagem');
    }
}

function getListagem(req,res,app){
    app.set('layout', './layouts/default/listagem');
    res.render('layouts/default/listagem', { erro: null });
}
module.exports = { getAdminLogin, adminLogin, getListagem };