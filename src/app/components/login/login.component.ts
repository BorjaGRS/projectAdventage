import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router'
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string;
  contrasena: string;
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  logIn(nombre: string, contrasena: string): void {

    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res as Usuario[];
        for (let user of this.usuarios) {
          console.log(nombre);
          console.log(contrasena);
          console.log(user.nombre);
          console.log(user.contrasena);
          if (user.nombre === nombre && user.contrasena === contrasena) {
            console.log("bienvenido");
            localStorage.setItem('login', JSON.stringify(user));
            break;
          }
        }
      }
    );

  }

}
