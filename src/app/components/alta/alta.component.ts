import { Component, OnInit } from '@angular/core';
import { UsuarioService } from  '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
  providers:[UsuarioService]
})
export class AltaComponent implements OnInit {
  cheked: boolean;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuario();
  }

  addUser(form: NgForm){
    this.usuarioService.postUsuarios(form.value).subscribe(res =>{
      this.getUsuario();
    });
  }
  getUsuario(){
    this.usuarioService.getUsuarios().subscribe(res => {this.usuarioService.usuarios = res as Usuario[];});
    
  }
  esChecked(e){
    this.cheked = e.target.checked;
  }

}
