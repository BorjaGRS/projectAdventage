import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {
  productos: Producto[];
  misProductos: Producto[] = [];
  usuario: Usuario;
  verFichaProducto: boolean = false; 
  
  constructor(public productoService: ProductoService) { }
  
  ngOnInit() {
      this.usuario = JSON.parse(localStorage.getItem("login"));
      this.productoService.getProductos().subscribe(res => {
        this.productos = res as Producto[];
        
        for(let producto of this.productos){
        if(this.usuario._id == producto.idVendedor){
          
          this.misProductos.push(producto);
          }
        }
      });
  }
  guardartemporalproducto(producto): void{
    localStorage.setItem('producto',JSON.stringify(producto));
    this.verFichaProducto = true;
  }




}
