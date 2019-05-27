export class Producto {

    _id: string;
    imagen: any;
    nombre: string;
    precio: string;
    antiguedad: string;
    tipo: string;
    descipcion: string;
    idVendedor: string;

    constructor(id = "" ,imagen = "",nombre = "",precio= "",antiguedad = "",tipo = "", descripcion="", idVendedor=""){

        this._id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.antiguedad = antiguedad;
        this.tipo = tipo;
        this.descipcion = descripcion;
        this.idVendedor = idVendedor;

    }
}
