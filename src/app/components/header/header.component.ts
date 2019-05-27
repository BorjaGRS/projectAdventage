import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   usuarioLogin: boolean;
   usuario: string;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.usuarioLogin = this.loginService.getLogin();
    if(this.usuarioLogin){
      let local = JSON.parse(localStorage.getItem("login"));
      this.usuario = local.nombre;
    }
  }
  cerrarSesion(): void{
    localStorage.clear();
  }


}
