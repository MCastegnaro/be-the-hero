const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'semana omnistack',
        name: 'Matheus'
    })
});


app.listen(3333, () => {
    console.log('App listening on port 3333!');
});