const express = require('express');
const router = express.Router();
const fotosController = require('../controllers/fotosController');

const fotosRouter = require('../controllers/fotosController');


router.get('/',fotosController.index);


module.exports = router;