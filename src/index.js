const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');
const app = express();


//Configuracion
app.set('port', process.env.PORT || 8084);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.use('/api/tareas',require('./routes/task-routers'));

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando el servidor
//Para ejecutar el servidor se debe escribir npm run dev
app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});