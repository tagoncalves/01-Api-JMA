const {getHolaMundoJuanService, getUsuarioAutorizadoService } = require("../services/main.services");

const getHolaMundoJuanController = ( req, res ) => {
    res.send(getHolaMundoJuanService());
}

const getUsuarioAutorizadoController = ( req, res ) => {
    res.send(getUsuarioAutorizadoService( req.user ));
}

module.exports = { getHolaMundoJuanController, getUsuarioAutorizadoController };