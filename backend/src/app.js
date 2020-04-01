const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const { errors } = require('celebrate');

// Para quando for para producao 
//app.use(cors(
//     origin:'http://meuapp.com'
// ));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;