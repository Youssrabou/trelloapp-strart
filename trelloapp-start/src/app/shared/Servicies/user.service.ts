import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials){
    console.log("body de connexion", credentials);
   this.http.post('http://localhost:1337/auth/local', credentials)
   .subscribe(
    (response :any) => localStorage.setItem('token', response.jwt), 
    err =>console.log("erreur de login", err));

  }

 
}
