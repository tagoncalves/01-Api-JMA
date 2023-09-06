
const setUserMiddleware = ( req, res, next ) => {
    req.user = req.params.user;
    next();
}

const isJuanUserMiddleware = ( req, res, next ) => {
    req.user == 'Juan' ? next() : res.sendStatus(401);
}


module.exports = { setUserMiddleware, isJuanUserMiddleware };