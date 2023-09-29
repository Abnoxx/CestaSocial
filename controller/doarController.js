const doar = [];

function getDoar(req, res) {
    res.render("layouts/default/doar", { doar });
}

module.exports = {getDoar};