const express = require('express');
const router = express.Router();
const {createImg,deleteImg,editImg,listImg,storeImg,updateImg,index} = require('../controllers/adminController');

router.get('/index',index);

router.get('/fotos/list',listImg);

router.get('/fotos/create',createImg);
router.post('/fotos/store',storeImg);

router.get('/fotos/edit/:id',editImg);
router.put('/fotos/update',updateImg);

router.delete('/fotos/delete/:id');


module.exports = router;