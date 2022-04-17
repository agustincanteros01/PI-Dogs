const express = require('express');
const app = express();
const axios = require('axios');
const { Temperamento } = require('../db.js');

app.get('/', async (req, res) => {

    let temperamentosApi = await axios.get(process.env.REACT_APP_API_KEY).then(datos => {
        const temp = datos.data.map(a => {
            return a.temperament;
        });
        return temp;
    });

    for(let i = 0; i < temperamentosApi.length; i++){
        if(temperamentosApi[i] === undefined){
            temperamentosApi.splice(i, 1);
            temperamentosApi.splice(126, 1);
        };
    };

    let tempStr = temperamentosApi.join('');
    //console.log(tempStr)

    tempStr = tempStr.replace(/ /g, '');
    //console.log(tempStr)

    tempStr = tempStr.split(',')
    //console.log(tempStr)

    let temps = [];

    for(let i = 0; i < tempStr.length; i++){

        let indicador = tempStr[i];
        if(!temps.includes(tempStr[i])){
            temps.push(indicador);
        };

    };

    await temps.map(a => {
        Temperamento.findOrCreate({
            where: {
                name: a,
            },
        });
    });

    const temperamentosDb = await Temperamento.findAll();

    res.json(temperamentosDb);

});

module.exports = app;