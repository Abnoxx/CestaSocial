const cadastro = [];
const newUser = require("../models/pessoaModel");

function getCadastro(req, res, app) {
    app.set('layout', './layouts/default/register');
    res.render('layouts/default/register', { cadastro });
}

async function newCadastro(req, res) {

    try {
        const {nome, cpf, endereco, email, senha, confirmSenha} = req.body;

        const user = await newUser.findOne({ where: { email } })

        if (user) {
            res.status(200).json({ message: "email ja cadastrado" })
        } else {

            if (senha != confirmSenha) {
                res.redirect("/usuario/register");
            }
            else if (senha == confirmSenha) {
                newUser.create({
                    nome,
                    cpf,
                    endereco,
                    email,
                    senha
                }).then(function () {
                    console.log("Cadastrado com sucesso");
                    res.redirect('/login');
                }).catch(function (error) {
                    console.log("Erro ao cadastrar pesosa: " + error);
                })
            }
        }
    } catch (err) {
        console.error("Erro ao cadastrar pessoa: " + err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }


}


module.exports = {getCadastro,newCadastro};