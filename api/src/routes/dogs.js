const express = require('express');
const app = express();
const axios = require('axios');
const { Dog } = require('../db.js');

app.get('/', async (req, res) => {

    

    try{

        if(req.query.name){

            const nombreQuery = req.query.name

            //console.log(req.query.name);

            let queryPerros = {};

            const perroDb = await Dog.findAll({
                where: {
                    name: nombreQuery,
                }
            });

            let dogsApi = await axios.get(process.env.REACT_APP_API_KEY).then(datos => {
                return datos.data.filter(res => {
                    return res.name === nombreQuery;
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

            //console.log(dogsApi)

            if(dogsApi[0]){
                Object.assign(queryPerros, dogsApi)
            }

            //console.log(perroDb)

            if(perroDb[0]){
                Object.assign(queryPerros, perroDb);
            }

            res.json(queryPerros)

        } else {

          const dogs = await axios.get(process.env.REACT_APP_API_KEY).then(datos => {
            return datos.data
        });

        const objPerro = await dogs.map(perros => {

            let obj = {}

            const perro = {
                idDogs: perros.id,
                name: perros.name,
                peso: perros.weight,
                altura: perros.height,
                promVida: perros.life_span
            }

            Object.assign(obj, perro)
            
            return obj

        });

        res.json(objPerro)

        //console.log(dogs)

        //res.send('TODO OK')
  
        }

    }catch(e){

        res.send(e);

    }

});

module.exports = app;


