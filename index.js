const express = require('express');
const mainRoute = require('./src/routes/main.routes');
const { setUserMiddleware } = require('./src/middlewares/main.middlewares');

require('dotenv').config();
const puerto = process.env.PORT || 83;

const app = express();

app.use(express.json());
app.use('/', mainRoute);

app.use('/user/:user', setUserMiddleware ,mainRoute);


app.listen(puerto, () => {
    console.log(`${new Date().toLocaleString() } - Servidor en puerto ${puerto}`);
});
