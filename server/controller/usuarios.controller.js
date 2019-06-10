const usuarios = require('../models/usuarios'); // optiene modelo de datos

const usuariosContr = {};

usuariosContr.getUsuario = async (req, res ) => {
    
   const usuario = await usuarios.find();
   res.json(usuario);
    
}

usuariosContr.createUsuario = async (req, res, next) => {

    const usuario = new usuarios({
        imagen: req.body.imagen,
         nombre: req.body.nombre,
        contrasena: req.body.contrasena,
         email: req.body.email,
         provincia: req.body.provincia
    });
    await usuario.save();
    res.json({status: 'Usuario creado'});
}


usuariosContr.updateUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        contrasena: req.body.contrasena,
        email: req.body.email,
        provincia: req.body.provincia
    }
    await usuarios.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario actualizado'});
}

usuariosContr.deleteUsuario = async (req, res) => {
    await usuarios.findByIdAndRemove(req.params.id);
    res.json({status:'usuario borrado'});
}

module.exports = usuariosContr;