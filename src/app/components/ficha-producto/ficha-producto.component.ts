import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';
import { ProductoService } from '../../services/producto.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.css']
})
export class FichaProductoComponent implements OnInit {
  producto: Producto;
  login: boolean;
  usuarios: Usuario[];
  vendedor: Usuario;
  miProducto: boolean = false;
  usuarioLogin: Usuario = JSON.parse(localStorage.getItem("login"));
  constructor(public loginService: LoginService,
              public usuarioService: UsuarioService,
              public productoService: ProductoService) { }

  ngOnInit() {
    this.producto = JSON.parse(localStorage.getItem("producto"));
    this.login = this.loginService.getLogin();
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarios = res as Usuario[];
      let boo: Boolean = true;
      while(boo === true){
      for(let user of this.usuarios){
        if(this.producto.idVendedor == user._id){
          this.vendedor = user;
          boo = false;
          if(this.producto.idVendedor == this.usuarioLogin._id){
            this.miProducto = true;
          }
        }
      }
      boo = false;
    }
    });
  }
  deleteProducto(){
    this.productoService.deleteProducto(this.producto._id).subscribe();
  }

}
