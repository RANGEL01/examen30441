'use strict'

var express = require('express');
var IntegrantesController = require('../controllers/integrantes');

var router = express.Router();

router.post('/integrante/equipo/:equipoId', IntegrantesController.add);

module.exports = router;