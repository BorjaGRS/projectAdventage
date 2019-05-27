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

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  logIn(nombre: string, contrasena: string): void {

    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res as Usuario[];
        for (let user of this.usuarios) {
          if (user.nombre === nombre && user.contrasena === contrasena) {
            localStorage.setItem('login', JSON.stringify(user));
            break;
          }
        }
      }
    );

  }

}
