const express = require('express');
const app = express();
const axios = require('axios');
const { Dog } = require('../db.js');

app.get('/:idRaza', async (req, res) => {

    try{

        const razaId = req.params.idRaza;

        let dogsApi = await axios.get(process.env.REACT_APP_API_KEY).then(datos => {
            return datos.data.filter(res => {
                return res.id == razaId;
            });
        })

        dogsApi = dogsApi.map(datos => {
            let obj = {}

            const perro = {
                idDogs: datos.id,
                name: datos.name,
                peso: datos.weight,
                altura: datos.height,
                promVida: datos.life_span
            }

            Object.assign(obj, perro)
        
            return obj
        })

        res.json(dogsApi)

    }catch(e){
        res.send({message:e})
    }

})

module.exports = app;