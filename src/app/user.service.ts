import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map,Observable} from "rxjs";
import {User} from "./user";

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
  localhostClientes = '/clientes';

  constructor(private http: HttpClient) { }
  login(): Observable<User[]>{
    return this.http.post<(User[])>(this.localhost, '/login').pipe( // /login não tem no projeto
      map((retorno: any) => retorno.data)
    );
  }
  getClientes(id: number): Observable<User>{
    return this.http.get<User>(this.localhostClientes, httpOptions).pipe(
      map((retorno: any) => retorno.data)
    )
  }

}
