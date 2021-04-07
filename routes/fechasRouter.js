const express = require('express');
const fechasController = require('../controllers/fechasController');
const router = express.Router();//traigo el metodo Router

const fechasRouter = require('../controllers/fechasController');

router.get('/',fechasController.index);



module.exports = router;