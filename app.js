const express = require("express");
const app = express();
const port = 4000;
const path =require('path')
const rutas=require('./routes/rutas')


//Esta linea genera la ruta absoluta con el path para usarse en cualquier so
app.set('views', path.join(__dirname,'views'))
//Seteamos el motor de ejs en carpeta views
app.set('view engine', 'ejs')
app.use(rutas)

app.use('/public',express.static(path.join(__dirname,"public")))

//MIDERWARE se ve cuando este tiene un use
app.use('/index',express.static(path.join(__dirname,"public")))


app.listen(port, ()=>{
    console.log(`El servidor esta ejecutado en el puerto ${port}`)
    console.log(path)
    console.log(__dirname)
})

