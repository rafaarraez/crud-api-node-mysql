const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

// importanto rutas
const userRoutes = require('./routes/users');

// settings express
const PORT = process.env.PORT || 4000;

//middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'rea01g06',
    port: '3306',
    database: 'usuarios_crud',
}, 'single'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

//routes
app.use('/', userRoutes);

// inicializando servidor
app.listen(PORT, () => {
    console.log(`API is running in port: ${PORT}`);
})

