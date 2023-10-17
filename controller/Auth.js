const login = [];
const newUser = require("../models/Pessoa");
const crypto = require("crypto");

async function getLogin(req, res, app) {
    app.set('layout', './layouts/default/login');
    res.render('layouts/default/login', { login });
}

async function logar(req, res) {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      res.render("login", { erro: "Preencha todos os campos" });
      return;
    }
  
    try {
      const user = await Pessoa.findOne({ where: { email } });
  
      if (!user) {
        res.render("login", { erro: "Usuário não encontrado" });
        return;
      }
  
      const senhaCriptografada = await crypto.createHash("md5").update(senha).digest("hex");
      if (senhaCriptografada !== user.senha) {
        res.render("login", { erro: "Senha incorreta" });
        return;
      }
  
      res.redirect("/home");
  
    } catch (error) {
      console.error(error);
      res.render("login", { erro: "Erro ao fazer login" });
    }
}

module.exports = { getLogin, logar };