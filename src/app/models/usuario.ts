

export class Usuario {

    _id: string;
    imagen: any;
    nombre: string;
    contrasena: string;
    email: string;
    provincia: string;

    constructor(id = "" ,imagen = "",nombre = "",contrasena= "",email = "",provincia = ""){

        this._id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.email = email;
        this.provincia = provincia;

    }



}
