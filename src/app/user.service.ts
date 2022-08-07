import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {User} from "./user";
import * as moment from "moment";


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : 'x-access-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  localhost = '/login';
  localhostClientes = "http://localhost:3000/cliente";

  constructor(private http: HttpClient) { }
  login(name: string, password: string): Observable<User[]>{
    return this.http.post<(User[])>(this.localhost,{name, password})
      .pipe(// /login não tem no projeto
      map((retorno: any) => retorno.data)
    );
  }
  getClientes(id: number): Observable<any[]>{
    return this.http.get<User>(this.localhostClientes)
      .pipe(
      map((retorno: any) => retorno.data)
    )
  }
  // private setSession(){
  //   const expire = moment().add(authResult.expiresIn, 'second'); // expiresIn suspeito
  //   localStorage.setItem("id" , authResult.id);
  //   localStorage.setItem("expires_at", JSON.stringify((expire.valueOf())));
  // }
  // isLoggedIn(){
  //   return moment().isBefore(this.getExpiration());
  // }
  // getExpiration(){
  //   const  expiration = localStorage.getItem("expires_at");
  //   const expiresAt = JSON.parse(expiration);
  //     return moment(expiresAt)
  // }

  getById(id: number) {
    
  }
}
