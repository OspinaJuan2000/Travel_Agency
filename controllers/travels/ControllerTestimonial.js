import {
    Testimonial
} from '../../models/travels/Testimonial.js';

const testimonialPage = async (req, res) => {

    try {
        const testimonials = await Testimonial.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        res.render('travels/testimonial', {
            pageName: 'Testimonials',
            testimonials
        });
    } catch (error) {
        console.log(error);
    }

}

const insertTestimonial = async (req, res) => {
    const {
        name,
        email,
        message
    } = req.body;

    const errors = {};

    if (name.trim() === '') errors.nameErr = 'The name is required';
    if (email.trim() === '') errors.emailErr = 'The email is required';
    if (message.trim() === '') errors.messageErr = 'The message is required';


    if (Object.keys(errors).length > 0) {

        const testimonials = await Testimonial.findAll({
            order: [
                ['fecha', 'DESC']
            ]
        });

        res.render('travels/testimonial', {
            pageName: 'Testimonials',
            errors,
            name,
            email,
            message,
            testimonials
        });

    } else {
        try {
            await Testimonial.create({
                nombre: name,
                email,
                mensaje: message,
                fecha: Date.now()
            });


            res.redirect('/testimonials');
        } catch (error) {
            console.log(error);
        }
    }
};

export {
    testimonialPage,
    insertTestimonial
}