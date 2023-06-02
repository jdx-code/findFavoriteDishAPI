const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)

router.get('/add-dish', adminController.addInfo)

module.exports = router
