import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:[UsuarioService]
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("login"));
    
  }


  editarUsuario(form: NgForm){
    form.value._id = this.usuario._id;
    
    if(form.value.imagen === ""){
      form.value.imagen = this.usuario.imagen;
    }
    if(form.value.nombre === ""){
      form.value.nombre = this.usuario.nombre;
    }
    if(form.value.contrasena === ""){
      form.value.contrasena = this.usuario.contrasena;
    }
    if(form.value.email === ""){
      form.value.email = this.usuario.email;
    }
    if(form.value.provincia === ""){
      form.value.provincia = this.usuario.provincia;
    }
    localStorage.clear();
    localStorage.setItem('login',JSON.stringify(form.value));
    this.usuarioService.putUsuario(form.value).subscribe((res)=>{
    });
  }

  borrarUsuario(): void{
    localStorage.clear();
    this.usuarioService.delete(this.usuario._id).subscribe();
  }

  
}
