const cadastro = [];
const newUser = require("../models/usuarioModel");

function getCadastro(req, res) {
    res.render("layouts/default/register", { cadastro });
}


async function cadastrar(req, res) {

    try {
        const {nome, email, senha} = req.body;

        const user = await newUser.findOne({ where: { email } })

        if (user) {
            res.status(200).json({ message: "email ja cadastrado" })
        } 
        else {
                newUser.create({
                    nome,
                    cpf,
                    endereco,
                    senha,
                    email
                })
        }
    }catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

module.exports = {getCadastro};