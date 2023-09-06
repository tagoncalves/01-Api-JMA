const { getHolaMundoJuanController, getUsuarioAutorizadoController } = require('../controllers/main.controllers');
const { isJuanUserMiddleware } = require('../middlewares/main.middlewares');
const route = require('express').Router();

route.get("/", getHolaMundoJuanController);
route.get("/auth", isJuanUserMiddleware , getUsuarioAutorizadoController);

module.exports = route ;