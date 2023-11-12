const Pessoa = require("../models/Pessoa");
const crypto = require("crypto");

async function getLogin(req, res, app) {
    app.set('layout', './layouts/default/login');
    res.render('layouts/default/login', { erro: null });
}

async function logar(req, res) {
  const email = req.body.email;
  let senha = req.body.senha;

  if (!email || !senha) {
    res.render("layouts/default/login", { erro: "Preencha todos os campos" });
  }

  senha = await crypto.createHash("md5").update(senha).digest("hex");

  Pessoa.autenticar(email, senha)
    .then((person) => {
      if (person) {
        req.session.pessoa = {
          id: person.id,
          email: person.email,
        };
        res.redirect("/home");
      } else {
        res.render("login", { erro: "Credenciais inválidas" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.render("login", { erro: "Erro ao autenticar" });
    });
}

function deslogar(req, res) {
  delete req.session.usuario;
  res.redirect("/usuario/login");
}

module.exports = { getLogin, logar, deslogar };