/**
 * 
 * @author Jhon Arteaga
 */

//Modulos a usar
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


//Cofigurador 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//const conn = 'mongodb://localhost/dbdbpr';        //Local -> Descomentar para trabajar en base de datos local
const conn = 'mongodb+srv://adminmundo:hoteles@cluster0-3mgbj.gcp.mongodb.net/mundo?retryWrites=true&w=majority';      //En la nube -> Descomentar para trabajar con la base de datos alojada en el sevidor


//Conexion con la base de datos Mongo
mongoose.connect(conn, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
}).then(db => console.log('conexion exitosa')).catch(err => console.log
    ('error: no se pudo establecer conexion con la Base de datos'));


//Middlewares
app.use(morgan('dev'));                                     //Para usar morgan y ver por consola las peticiones
app.use(express.static(path.join(__dirname, 'public')));    //Para que la carpeta public quede publica
app.use(express.json());                                    //Para entender json


//Ruta para las peticiones de la api
app.use('/api', require('./routes/index'));

//Cuando el servidor este listo
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${3000}`)
});