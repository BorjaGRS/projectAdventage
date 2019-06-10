const express = require('express');
const router = express.Router();

const produc = require('../controller/productos.controller');

router.get('/',produc.getProducto);
router.delete('/:id',produc.deleteProducto);
router.post('/',produc.createProducto);


module.exports = router;