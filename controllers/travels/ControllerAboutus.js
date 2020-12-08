const aboutUsPage = async (req, res) => {
    res.render('travels/aboutus', {
        pageName: 'About us'
    });
}

export {
    aboutUsPage
}