import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos: Producto[]; 
  verFichaProducto: boolean = false;
  estadoClase: boolean = true;
  constructor(public productoService: ProductoService) { }

  ngOnInit() {
    this.sacarProductos();
  }

  sacarProductos(): void{
    this.productoService.getProductos().subscribe(res => {
      this.productos = res as Producto[];
    });
  }

  guardartemporalproducto(producto): void{
    localStorage.setItem('producto',JSON.stringify(producto));
    this.verFichaProducto = true;
  }
  cambiarClase(){
    this.estadoClase = false;
  }

}
