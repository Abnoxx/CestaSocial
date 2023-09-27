const listar = [];

function getListarCarro(req, res) {
    res.render("layouts/default/listar", { listar });
}

module.exports = {getListarCarro};