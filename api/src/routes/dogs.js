const express = require('express');
const app = express();
const axios = require('axios');
const { Dog } = require('../db.js');

app.get('/', async (req, res) => {



    try {

        // SI TIENE QUERY.NAME ENTONCES TRABAJO EN ESO SINO MUESTRO TODOS LOS DATOS DE LA API

        if (req.query.name) {

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

            if (dogsApi[0]) {
                Object.assign(queryPerros, dogsApi)
            }

            //console.log(perroDb)

            if (perroDb[0]) {
                Object.assign(queryPerros, perroDb);
            }

            res.json(queryPerros)

        } else {

            // TOMO LOS DATOS DE LA API Y LOS ENVIO EN JSON A CLIENTE

            const dogs = await axios.get(process.env.REACT_APP_API_KEY).then(datos => {
                return datos.data
            });



            const { count } = await Dog.findAndCountAll()

            if (count > 0) {
                const peras = await Dog.findAll({
                    attributes: ['name', 'weight', 'height', 'life_span', 'id']
                })
                let arrDogs = peras.map(perro => {
                    return perro.dataValues
                })

                let arrPerros = dogs.concat(arrDogs)

                const objPerro = await arrPerros.map(perros => {

                    let obj = {}

                    const perro = {
                        id: perros.id,
                        name: perros.name,
                        weight: perros.weight,
                        height: perros.height,
                        life_span: perros.life_span
                    }

                    Object.assign(obj, perro)

                    return obj

                });

                res.json(objPerro)

            } else {
                
                const objPerro = await dogs.map(perros => {

                    let obj = {}

                    const perro = {
                        id: perros.id,
                        name: perros.name,
                        weight: perros.weight,
                        height: perros.height,
                        life_span: perros.life_span
                    }

                    Object.assign(obj, perro)

                    return obj

                });

                res.json(objPerro)
            }

        }

    } catch (e) {

        res.send(e);

    }

});


module.exports = app;



