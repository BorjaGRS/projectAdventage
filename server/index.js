const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require ('./database');

//configuracion     
app.set('port', process.env.PORT || 3000);

//funciones
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//rutas
app.use('/adventage/usuarios',require('./routes/adventage.routes'));
app.use('/adventage/productos',require('./routes/productos.routes'));
//inicia servidor

app.listen(app.get('port'), ()=>{
    console.log("server en el puerto: ", app.get('port'));
});