const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        eventi: 'Semana tri',
        aluno: 'Crebis'
    });
});

app.listen(3333);