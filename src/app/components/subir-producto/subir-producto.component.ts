import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-subir-producto',
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.css'],
  providers:[ProductoService]
})
export class SubirProductoComponent implements OnInit {
  usuario: Usuario = JSON.parse(localStorage.getItem("login"));
  productos: Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

  addProducto(form: NgForm){
    form.value.idVendedor = this.usuario._id;
    console.log(form.value);
    this.productoService.postProducto(form.value).subscribe(res =>{
      this.sacarProductos();
    });
  }

  sacarProductos(): void{
    this.productoService.getProductos().subscribe(res => {
      this.productos = res as Producto[];
    });
  }

}
