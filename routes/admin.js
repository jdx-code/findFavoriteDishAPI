const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)

router.post('/add-dish-info', adminController.addDishInfo)

module.exports = router
