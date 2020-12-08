import {
    Travel
} from '../../models/travels/Travel.js';

import {
    Testimonial
} from '../../models/travels/Testimonial.js';

const startPage = async (req, res) => {

    const promiseDB = Promise.all([Travel.findAll({
        limit: 3
    }), Testimonial.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 3
    })]);

    try {
        const result = await promiseDB;

        res.render('travels/index', {
            pageName: 'Welcome to Travel Agency',
            classPage: 'home',
            travels: result[0],
            testimonials: result[1]
        });

    } catch (error) {
        console.log(error);
    }

}

export {
    startPage
}