import express from 'express';

import bodyParser from "body-parser";

import {
    router
} from './routes/index.js';

import {
    DB
} from './config/db.js';

import dotenv from 'dotenv';

dotenv.config({
    path: 'variables.env'
});

const app = express();

// Conectar a mysql.
DB.authenticate()
    .then(() => {
        console.log('Database MYSQL ON');
    })
    .catch(err => console.log(err));

    
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
    
    const port = process.env.PORT || 4000;
    const host = process.env.HOST || '0.0.0.0';
    
    // Abrir el servidor.
    app.listen(port, host, () => {
        console.log(`Server running on port ${port} and host ${host}`);
});