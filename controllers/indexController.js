module.exports = {
    index:(req,res)=>{
        res.render('home',{
            title : "Gabriela Barrientos",
            mensaje: "Bienvenidos al sitio"
        })
    },
}