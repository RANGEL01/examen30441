'use strict'

// REQUIRES
var express = require('express');
var bodyParser = require('body-parser');

// EJECUTAR EXPRESS
var app = express();

// CARGAR ARCHIVOS DE RUTA
var equipo_routes = require('./routes/equipo');
var integrantes_routes = require('./routes/integrante');

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// REESCRIBIR RUTAS INTERNAS PARA LA APLICACION
app.use('/api', equipo_routes);
app.use('/api', integrantes_routes);

//EXPORTAR MODULO
module.exports = app;