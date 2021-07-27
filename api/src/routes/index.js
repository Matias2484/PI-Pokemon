const { Router } = require("express");
const { default: fetch } = require("node-fetch");
const { Pokemon } = require("../db");

const pokemonsRouter = require("./pokemons.js");
const typesRouter = require("./types.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
