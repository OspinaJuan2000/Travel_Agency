import {
    Travel
} from '../../models/travels/Travel.js';

const travelPage = async (req, res) => {

    try {
        const travels = await Travel.findAll();

        res.render('travels/travel', {
            pageName: 'Upcoming trips',
            travels
        });
    } catch (error) {
        console.log(error);
    }
}

const travelPageDetail = async (req, res) => {
    const travelParam = req.params.travel;

    try {
        const travel = await Travel.findOne({
            where: {
                slug: travelParam
            }
        });
        res.render('travels/detailTravel', {
            pageName: `Detail ${travel.titulo}`,
            travel
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    travelPage,
    travelPageDetail
}