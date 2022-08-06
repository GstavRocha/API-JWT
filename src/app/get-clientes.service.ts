import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
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
export class GetClientesService {
  localhostClientes = '/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<User[]>{
    return this.http.get<User[]>(this.localhostClientes,httpOptions)
      .pipe(
        map((retorno: any) => retorno.data)
      );

  }
}
