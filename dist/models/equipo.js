'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// MODELO DE INTEGRANTES
var IntegranteSchema = Schema({
    matricula: String,
    apellido_paterno: String,
    apellido_materno: String,
    nombre: String,
    edad: Number,
    rol: String,
    fotografia: String
});

// OBJECT COMMENT
var Integrante = mongoose.model('Integrante', IntegranteSchema);

// MODELO DE TOPIC
var EquipoSchema = Schema({
    nombre: String,
    institucion: String,
    logotipo: String,
    categoria: String,
    integrantes: [IntegranteSchema]
});

module.exports = mongoose.model('Equipo', EquipoSchema);