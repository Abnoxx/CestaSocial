function loginAnalyse(req, res, next) {
    if (req.session.usuario) {
      next();
    } else {
      res.redirect("/usuario/login");
    }
  }

  function adminAnalyse(req, res, next) {
    if (req.session.usuario) {
      next();
    } else {
      res.redirect("/admin/login");
    }
  }

  function analyseRoute(req, res, next) {
    if (req.session.usuario) {
      res.redirect("/home");
    } else {
      next();
    }
  }
  module.exports = { loginAnalyse, analyseRoute, adminAnalyse };