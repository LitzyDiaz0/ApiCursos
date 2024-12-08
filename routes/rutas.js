const express = require('express')
const router = express.Router();
const paginas = require('../controllers/paginasController.js')

router.get("/", paginas.index) //raiz
router.get("/cursos", paginas.cursos)
router.get("/index", paginas.index)
router.get("/login2", paginas.login2)
router.get("/login", paginas.login)
router.get("/registro", paginas.registro)
// router.get('/',(req,res)=>{
//     res.send("Hola desde Express");
// });
module.exports = router;