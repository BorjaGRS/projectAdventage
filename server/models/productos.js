const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema ({
    imagen: {type: String, required: false},
    nombre: {type: String, required: true},
    precio: {type: String, required: true},
    antiguedad: {type: String, required: true},
    tipo: {type: String, required: true},
    descripcion: {type: String, required: false},
    idVendedor: {type: String, required: true}
});

module.exports = mongoose.model('producto', ProductoSchema);