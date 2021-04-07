module.exports = {
    index:(req,res)=>{
        const fotos = require('../data/fotos')
        res.render('fotos',{
            title:"Nuestras fotos",
            fotos
        })
    }
}