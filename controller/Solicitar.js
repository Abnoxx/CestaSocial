const solicitar = [];

function getSolicitar(req, res) {
    res.render("layouts/default/solicitar-cesta", { solicitar });
}

module.exports = {getSolicitar};