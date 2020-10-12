const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importanto rutas
const userRoutes = require('./routes/users');

// settings express
const PORT = process.env.PORT || 3000;

//middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'rea01g06',
    port: '3306',
    database: 'usuarios_crud',

}, 'single'));

app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', userRoutes);

// inicializando servidor
app.listen(PORT, () => {
    console.log(`API is running in port: ${PORT}`);
})

