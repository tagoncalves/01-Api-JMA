const getHolaMundoJuanService = () => {
    return 'Hola Mundo Juan';
}
const getUsuarioAutorizadoService = ( usu ) => {
    return `Usuario ${usu} Autorizado!`;
}

module.exports = { getHolaMundoJuanService, getUsuarioAutorizadoService };