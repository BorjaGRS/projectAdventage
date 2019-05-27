import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  guardarProducto: Producto;
  readonly url = 'http://localhost:3000/adventage/productos';

  constructor(private http: HttpClient) { 
    this.guardarProducto = new Producto();
  }


  getProductos(){
    return this.http.get(this.url);
  }
  deleteProducto(id: string){
    return this.http.delete(this.url + `/${id}`);
  }
  postProducto(producto: Producto){
    return this.http.post(this.url, producto);
  }
}
