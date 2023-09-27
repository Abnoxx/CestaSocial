const cadastroUsuario = [];
const NewUser = require("../models/pessoaModel");

function getCadastroUsuario(req, res) {
    res.render('layouts/default/register', { cadastroUsuario });
}

// async function cadastrar(req, res) {

//     try {
//         const {nome, email, senha} = req.body;

//         const user = await newUser.findOne({ where: { email } })

//         if (user) {
//             res.status(200).json({ message: "email ja cadastrado" })
//         } else {

//             if (senha != confirmSenha) {
//                 res.redirect("/register");
//             }
//             else if (senha == confirmSenha) {
//                 AddUser.create({
//                     nome,
//                     email,
//                     senha
//                 }).then(function () {
//                     console.log("Cadastrado com sucesso");
//                     res.redirect('/login');
//                 }).catch(function (error) {
//                     console.log("Erro ao cadastrar pesosa: " + error);
//                 })
//             }
//         }
//     } catch (err) {
//         console.error("Erro ao cadastrar pessoa: " + err);
//         res.status(500).json({ error: "Erro interno do servidor" });
//     }
// }
async function cadastro(req, res) {
    try {
        const { nome, cpf, endereco, email, senha } = req.body
        const usuario = await NewUser.findOne({ where: { email } })

        if (usuario) {
            res.status(200).json({ message: "O email é referente a outra conta!" });
        }
        else if (senha == req.body.senha) {
            NewUser.create({
                nome,
                cpf,
                endereco,
                senha,
                email
            }).then(function () {
                console.log("Cadastrado com sucesso");
                res.redirect('/login');
            })
        }
        else {
            res.redirect('/login');
        }
    }
    catch (err) {
        console.error("Erro ao cadastrar pessoa: " + err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

module.exports = { getCadastroUsuario, cadastro };