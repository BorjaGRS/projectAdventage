import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  guardaUsuario: Usuario;
  readonly urlApi = 'http://localhost:3000/adventage/usuarios';
  usuarios: Usuario[];
  
  constructor(private http: HttpClient) { 
    this.guardaUsuario = new Usuario();
  }

  getUsuarios(){
    return this.http.get(this.urlApi);
  }
  postUsuarios(usuario: Usuario){
    return this.http.post(this.urlApi, usuario);
  }

  putUsuario(usuario: Usuario){
    return this.http.put(this.urlApi + `/${usuario._id}`, usuario);
  }

  delete(id: string){
    
    return this.http.delete(this.urlApi + `/${id}`);
  }
}
