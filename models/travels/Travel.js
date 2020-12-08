import Sequelize from 'sequelize';

import {
    DB
} from '../../config/db.js';

const Travel = DB.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.NUMBER
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.NUMBER
    },
    slug: {
        type: Sequelize.STRING
    }
});

export {
    Travel
}