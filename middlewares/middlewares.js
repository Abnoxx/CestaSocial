function VerificaLogin(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    res.redirect("/usuario/login");
  }
}

function VerificaRotasEspeciais(req, res, next) {
  if (req.session.usuario) {
    res.redirect("/home");
  } else {
    next();
  }
}

module.exports = { VerificaLogin, VerificaRotasEspeciais };