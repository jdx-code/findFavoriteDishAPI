const Dish = require('../models/Dish')

module.exports = {
    getIndex: (req, res) => {
        res.render('admin/index')
    },

    addDishInfo: async (req, res) => {
        try{
            await Dish.create({
                item: req.body.itemname,
                country: req.body.country,
                location: req.body.location,
                img: 'some img url..',            
            })
            
            res.redirect('/admin/index')
        } catch(err) {
            console.error(err)
            res.render('error/500')
        }
    }
}