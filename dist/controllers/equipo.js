'use strict'

var validator = require('validator');
var Equipo = require('../models/equipo');

var controller = {

    save :  function (req, res) {

        var params = req.body;

        try {

            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_institucion = !validator.isEmpty(params.institucion);
            var validate_categoria = !validator.isEmpty(params.categoria);
            var validate_logotipo = !validator.isEmpty(params.logotipo);

        } catch (error) {
            return res.status(500).send({
                message: 'Faltan datos por enviar',
                error: error
            });
        }

        if (validate_nombre && validate_institucion && validate_categoria && validate_logotipo) {
            
            var equipo = new Equipo();

            equipo.nombre = params.nombre;
            equipo.institucion = params.institucion;
            equipo.logotipo = params.logotipo;
            equipo.categoria = params.categoria;

            equipo.save((err, equipoStored) => {

                if (err || !equipoStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El equipo no se ha guardado'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    message: 'Equipo guardado exitosamente',
                    equipo: equipoStored
                });
            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos',
            });
        }
    },

    update: function (req,res) {
        // RECOGER EL EQUIPO A MODIFICAR
        var equipoId = req.params.id;

        // RECOGER DATOS
        var params = req.body;
        
        // VALIDAR QUE DATOS NO ESTEN VACIOS
        
        var update = {
            nombre : params.nombre,
            institucion : params.institucion,
            logotipo : params.logotipo,
            categoria : params.categoria
        };

        Equipo.findOneAndUpdate({_id: equipoId}, update, {new: true}, (err, equipoUpdated) => {

            if(err || !equipoUpdated) {
                return  res.status(404).send({
                    status: 'error',
                    message: 'No se ha podido actualizar el equipo'
                });
            }

            return  res.status(200).send({
                status: 'success',
                equipo: equipoUpdated
            });
        });
    },

    delete: function (req, res) {
        // SACAR EL ID DEL EQUIPO DE LA URL
        var equipoId = req.params.id;

        // BUSCAR EQUIPO A ELIMINAR
        Equipo.findByIdAndDelete({ _id: equipoId }, (err, equipoRemoved) => {

            if(err || !equipoRemoved) {
                return  res.status(404).send({
                    status: 'error',
                    message: 'No se ha podido eliminar el tema'
                });
            }

            return res.status(200).send({
                status: 'success',
                equipo: equipoRemoved
            });
        });
    },

    getEquipos: function(req, res) {
		Equipo.find().exec((error, equipos) => {
			if (error || !equipos) {
				return res.status(404).send({
					status: 'error',
					message: 'No hay equipos que mostrar'
				});
			}

			return res.status(200).send({
				status: 'success',
				equipos
			});
		});
    },
    
    getEquipo: function(req, res) {
		var equipoId = req.params.id;
		Equipo.findById(equipoId).exec((error, equipo) => {
			if (error || !equipo) {
				return res.status(404).send({
					status: 'error',
					message: 'No existe el equipo'
				});
			}
			return res.status(200).send({
				status: 'success',
				equipo
			});
		});
	}
};

module.exports = controller;