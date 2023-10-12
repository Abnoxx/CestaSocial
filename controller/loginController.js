const login = [];
const newUser = require("../models/pessoaModel");

async function getLogin(req, res, app) {
    app.set('layout', './layouts/default/login');
    res.render('layouts/default/login', { login });
}

async function logar(req, res) {
    try {
        const { senha } = req.body;
        const usuario = await newUser.findOne({ where: { senha } });

        if (!usuario) {
            res.send("A senha está incorreta");
        } else {
            res.redirect('/home');
        }
    } catch (error) {
        console.error("Erro ao verificar a senha:", error);
        res.status(500).send("Erro interno do servidor");
    }
}

module.exports = { getLogin, logar };