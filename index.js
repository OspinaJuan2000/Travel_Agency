import express from 'express';

import bodyParser from "body-parser";

import {
    router
} from './routes/index.js';

import {
    DB
} from './config/db.js';

const app = express();

// Conectar a mysql.
DB.authenticate()
    .then(() => {
        console.log('Database MYSQL ON');
    })
    .catch(err => console.log(err));

const port = process.env.PORT || 4000;

// Habilitar Pug.
app.set('view engine', 'pug');

//Obtener el año actual.
app.use((req, res, next) => {
    const date = new Date();

    res.locals.currentYear = date.getFullYear();

    res.locals.appName = 'Travel Agency';
    next();
});

// Habilitar body parser para leer los datos de los formularios.
app.use(bodyParser.urlencoded({
    extended: true
}));

// Definir la carpeta pública.
app.use(express.static('public'));

// Habilitar las rutas.
app.use('/', router);


// Abrir el servidor.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});