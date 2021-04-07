/*Variables e Inportaciones*/
const express = require('express');//requiero el modulo de express
const app = express();
const port = 3000
const indexRouter = require('./routes/indexRouter');
const fechasRouter = require('./routes/fechasRouter');
const fotosRouter = require('./routes/fotosRouter');
const adminRouter = require('./routes/adminRouter');


/*configuraciones*/
app.set('view engine', 'ejs');//le digo a express que el motor de viste es ejs 
app.set('views',__dirname + '/views');//configuro la carpeta donde va a estar guardada las vistas

app.use(express.static(__dirname + '/public'));//configuro los recursos estatico

/*Rutas */
app.use('/',indexRouter);
app.use('/fechas',fechasRouter);
app.use('/fotos',fotosRouter);
app.use('/admin',adminRouter);






app.listen(port, ()=>console.log('El servidor esta corriendo en el puerto ' + port))
