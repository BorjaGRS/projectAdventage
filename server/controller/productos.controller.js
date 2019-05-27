const productos = require('../models/productos'); // optiene modelo de datos

const productosContr = [];

productosContr.getProducto = async (req, res ) => {
    const producto = await productos.find();
    res.json(producto);
     
 }

productosContr.deleteProducto = async (req, res) => {
    await productos.findByIdAndRemove(req.params.id);
    res.json({status:'Producto borrado'});
}

productosContr.createProducto = async(req, res, next) => {

    const producto = new productos({
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        precio: req.body.precio,
        antiguedad: req.body.antiguedad,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        idVendedor: req.body.idVendedor
        
    });
    await producto.save();
    res.json({status: 'Producto creado'});
}

 module.exports = productosContr;