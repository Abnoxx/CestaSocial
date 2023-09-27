const login = [];
const newPessoa = require("../models/pessoaModel");

async function getLogin(req, res) {
    res.render("layouts/default/login", { login });
}

async function logar(req, res) {
    try {
        const { senha } = req.body;
        const usuario = await newPessoa.findOne({ where: { senha } });
        if (senha != req.body.senha) {
            res.send("senha errada")
            res.redirect("/register");
        }
        else if(senha == req.body.senha){
            res.redirect('/home');
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
}

module.exports = { getLogin, logar };
