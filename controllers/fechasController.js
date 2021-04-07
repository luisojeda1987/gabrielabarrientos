const fechas = require('../data/fechas');


module.exports = {
    index:(req,res)=>{
        res.render('fechas',{
            title:"Fechas Eventos",
            fechas
        })
    },
}