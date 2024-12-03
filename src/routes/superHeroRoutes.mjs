import express from 'express';
import { 
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller, 
    agregarSuperheroeController, 
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
    } from '../controllers/superheroesController.mjs';
import { heroeValidation } from '../validators/heroeValidator.mjs'
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

//Rutas
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/heroes/heroe-nuevo', heroeValidation(), handleValidationErrors, agregarSuperheroeController);
router.put('/heroes/:id', heroeValidation(), handleValidationErrors, actualizarSuperheroeController);
router.delete('/heroes/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombre', eliminarSuperheroePorNombreController);

export default router;
