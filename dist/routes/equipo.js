'use strict'

var express = require('express');
var EquipoController = require('../controllers/equipo');

var router = express.Router();

router.post('/equipos', EquipoController.save);
router.get('/equipos', EquipoController.getEquipos);
router.get('/equipo/:id', EquipoController.getEquipo);
router.put('/equipo/:id', EquipoController.update);
router.delete('/equipo/:id', EquipoController.delete);

module.exports = router;