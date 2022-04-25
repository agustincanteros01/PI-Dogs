const express = require('express');
const app = express();
const { Dog } = require('../db.js');
const axios = require('axios');

app.post('/', async (req, res) => {

    try {
        let mensaje = 'La raza ya esta registrada';

        const bodyDatos = req.body;

        //console.log(datos);

        const compracionApi = await axios.get(process.env.LOCAL_API_KEY).then(datos => {
            for (let i = 0; i < datos.data.length; i++) {
                if (datos.data[i].name === bodyDatos.name) {
                    return mensaje
                } else {
                    const creacionDog = Dog.findOrCreate({
                        where: {
                            name: bodyDatos.name,
                            height: bodyDatos.altura,
                            weight: bodyDatos.peso,
                            life_span: bodyDatos.promVida
                        }
                    })
                    return creacionDog;
                }
            }
        });

        res.json(compracionApi)

    } catch (e) {

        res.send(e)

    }
    
});

module.exports = app;