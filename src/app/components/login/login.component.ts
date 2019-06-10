import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Usuario[];
  user: Usuario;
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  logIn(nombre: string, contrasena: string): void {
    this.usuarioService.getUsuarios().subscribe(
    res => {
        this.usuarios = res as Usuario[];
        this.user =  this.usuarios.find( x => x.nombre === nombre && x.contrasena === contrasena);
        if(this.user){
          localStorage.setItem('login', JSON.stringify(this.user));
        }
      }
    );
  }
}
