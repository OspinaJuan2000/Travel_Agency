import express from 'express';

import {
    startPage
} from '../controllers/travels/ControllerIndex.js';

import {
    aboutUsPage
} from '../controllers/travels/ControllerAboutus.js';

import {
    testimonialPage,
    insertTestimonial
} from '../controllers/travels/ControllerTestimonial.js';

import {
    travelPage,
    travelPageDetail
} from '../controllers/travels/ControllersTravel.js';

const router = express.Router();

/*
    Req: lo que enviamos.
    Res: Lo que express nos responde.
*/

router.get('/', startPage);

router.get('/aboutus', aboutUsPage);

router.get('/testimonials', testimonialPage);

router.get('/travels/:travel', travelPageDetail);

router.get('/travels', travelPage);

router.post('/testimonials', insertTestimonial);


export {
    router
}