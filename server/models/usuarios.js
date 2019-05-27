const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema ({
    imagen: {type: String, required: false},
    nombre: {type: String, required: true},
    contrasena: {type: String, required: true},
    email: {type: String, required: true},
    provincia: {type: String, required: true}
});

module.exports = mongoose.model('usuario', UsuarioSchema);