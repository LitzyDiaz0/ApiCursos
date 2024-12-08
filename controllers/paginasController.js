const index = (req,res)=>{res.render('index') }
//PARA LA BD const usuariosModel = require('../models/modeloUsuario.js')
const cursos = (req,res)=>{res.render('cursos') }
const login = (req,res)=>{res.render('login') }
const login2 = (req,res)=>{res.render('login2') }
const registro = (req,res)=>{res.render('registro') }



module.exports={
    index,
    cursos,
    login,
    login2,
    registro
}