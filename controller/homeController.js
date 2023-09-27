const home = [];

function getHome(req, res) {
    res.render("layouts/default/home", { home });
}

module.exports = {getHome};