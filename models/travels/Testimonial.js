import Sequelize from 'sequelize';

import {
    DB
} from '../../config/db.js';

const Testimonial = DB.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATE
    }
});

export {
    Testimonial
}