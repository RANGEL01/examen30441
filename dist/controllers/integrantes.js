"use strict"

var Equipo = require('../models/equipo');
var validator = require('validator');

var controller = {

    add: function (req, res) {

        // RECOGER ID DEL EQUIPO MEDIANTE LA URL
        var equipoId = req.params.equipoId;

        // ENCONTRAR EL EQUIPO
        Equipo.findById(equipoId).exec(( err, equipo) => {
            if(err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion'
                }); 
            }
            if(!equipo) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el equipo'
                }); 
            }

            var params = req.body;

            try {

                var validate_matricula = !validator.isEmpty(params.matricula);
                var validate_apellido_paterno = !validator.isEmpty(params.apellido_paterno);
                var validate_apellido_materno = !validator.isEmpty(params.apellido_materno);
                var validate_nombre = !validator.isEmpty(params.nombre);
                var validate_edad = !validator.isEmpty(params.edad);
                var validate_rol = !validator.isEmpty(params.rol);
                var validate_fotografia = !validator.isEmpty(params.fotografia);

            } catch (error) {
                return res.status(500).send({
                    message: 'Faltan datos por enviar',
                    error: error
                });
            }

            if (validate_matricula && validate_apellido_paterno && validate_apellido_materno && validate_nombre && validate_edad && validate_rol && validate_fotografia) {
                var integrante = {
                    matricula: params.matricula,
                    apellido_paterno: params.apellido_paterno,
                    apellido_materno: params.apellido_materno,
                    nombre: params.nombre,
                    edad: params.edad,
                    rol: params.rol,
                    fotografia: params.fotografia
                };  

                if (equipo.integrantes.length < 4) {
                    equipo.integrantes.push(integrante);
                    equipo.save((err) => {

                        if(err) {
                            return res.status(500).send({
                                status: 'error',
                                message: 'Error al guardar el integrante'
                            }); 
                        }
    
                        return res.status(200).send({
                            status: 'success',
                            equipo
                        }); 
                    });
                } else {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error equipo completo'
                    }); 
                }
               

            } else {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al guardar el integrante'
                }); 
            }
        });
    }
    
};

module.exports = controller;