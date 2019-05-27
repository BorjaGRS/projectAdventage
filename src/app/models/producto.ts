export class Producto {

    _id: string;
    imagen: any;
    nombre: string;
    precio: string;
    antiguedad: string;
    tipo: string;
    descripcion: string;
    idVendedor: string;

    constructor(id = "" ,imagen = "",nombre = "",precio= "",antiguedad = "",tipo = "", descripcion="", idVendedor=""){

        this._id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.antiguedad = antiguedad;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.idVendedor = idVendedor;

    }
}
