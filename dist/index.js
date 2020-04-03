'use strict'

// REQUIRES
var mongoose = require('mongoose');
var app = require('./app');
var environment = require('./global/environment');

// CONEXIÓN CON MONGO

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://isw5b:isw5B@cluster0-i3ggb.mongodb.net/examen30441?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then( () => {
            console.log('Conexión a la base de datos de mongo se ha realizado correctamente');
            app.listen( environment.SERVER_PORT, () => {
                console.log('El servidor http://localhost:' + environment.SERVER_PORT + ' está funcionando');
            });
        })
        .catch( error => console.log(error));