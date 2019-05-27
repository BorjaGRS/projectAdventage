import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  getLogin(){
    let log = localStorage.getItem("login");
    if(log){
      return true;
    }
    else{
      return false;
    }
  }


}
