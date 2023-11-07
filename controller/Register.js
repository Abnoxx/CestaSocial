const Pessoa = require("../models/Pessoa");
const crypto = require("crypto");

function getCadastro(req, res, app) {
    app.set('layout', './layouts/default/register');
    res.render('layouts/default/register', { erro: null });
}

async function cadastrar(req, res) {
    const email = req.body.email;
    let senha = req.body.senha;
    const confirmSenha = req.body.confirmSenha;

    if (!email || !senha || !confirmSenha) {
        res.render("register", { erro: "Preencha todos os campos" });
    } else if (senha.length < 8) {
        res.render("register", { erro: "A senha deve ter no mínimo 8 caracteres" });
    } else if (senha !== confirmSenha) {
        res.render("register", { erro: "As senhas não coincidem" });
    } else {
        const person = await Pessoa.getEmail(email);

        if (person) {
            res.render("register", { erro: "Email já cadastrado" });
        } else {
            senha = await crypto.createHash("md5").update(senha).digest("hex");

            Pessoa.create({ email, senha })
                .then(() => {
                    res.redirect("/usuario/login");
                })
                .catch((error) => {
                    console.error(error);
                    res.render("register", { erro: "Erro ao cadastrar" });
                });
        }
    }
}

module.exports = { getCadastro, cadastrar };