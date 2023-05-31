const { Router } = require('express');
// Importar todos los routers;
const dogsRouter = require('./routesDogs');
const temperamentsRouter = require("./temperaments")
const userRoutes = require("./userRoutes")

const router = Router();

router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)
router.use("/user", userRoutes)

module.exports = router;
