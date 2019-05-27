import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  
  productos: Producto[];
  categoriaProductos: Producto[] = [];
  categoria: boolean = true;
  verFichaProducto:boolean = false;
  constructor( private productoService: ProductoService) { }

  ngOnInit() {
    this.sacarProductos();
  }


  sacarProductos(): void{
    this.productoService.getProductos().subscribe(res => {
      this.productos = res as Producto[];
    });
  }
  tipoProductos(nombre: string): void{
    this.categoria = false;
    for(let producto of this.productos){
      if(producto.tipo == nombre){
        this.categoriaProductos.push(producto);
      }
    }
  }
  guardartemporalproducto(producto): void{
    localStorage.setItem('producto',JSON.stringify(producto));
    this.verFichaProducto = true;
  }

}
