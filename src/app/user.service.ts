import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map,Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(): Observable<User[]>{
    const url = '/login';
    return this.http.post<(User[])>(url, '/login').pipe( // /login não tem no projeto
      map((retorno: any) => retorno.data)
    );
  }
  getCliente(id: number): Observable<User>{
    const url = '/clientes';
    return this.http.get<User>(url).pipe(
      map((retorno: any) => retorno.data)
    )
  }
}
