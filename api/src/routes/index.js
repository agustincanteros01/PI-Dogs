const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs.js');
const dogsId = require('./dogs-id.js');
const temperamentos = require('./temperamentos.js');
const dog_post = require('./dog_post');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/dogsId', dogsId);
router.use('/temperamentos', temperamentos);
router.use('/dog', dog_post);


module.exports = router;
