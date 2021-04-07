const fotos = require('../data/fotos');

module.exports = {
    index: (req,res)=>{
        res.render('admin/index')
    },
    listImg:(req,res)=>{
        res.render('admin/fotos',{
            fotos
        })

    },
    createImg:(req,res)=>{
        res.render('admin/imgCreate')
    },
    storeImg:(req,res)=>{

    },
    editImg:(req,res)=>{
        res.render('admin/imgEdit')
    },
    updateImg:(req,res)=>{

    },
    deleteImg:(req,res)=>{

    }
}