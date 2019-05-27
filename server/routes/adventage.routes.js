const express = require('express');
const router = express.Router();

const  user = require('../controller/usuarios.controller');

router.get('/',user.getUsuario);
router.post('/',user.createUsuario);
router.put('/:id',user.updateUsuario);
router.delete('/:id',user.deleteUsuario);


module.exports = router;