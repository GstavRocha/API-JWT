import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import * as bodyParser from "body-parser";

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : 'x-access-token'

  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  localhost ='/login'

  constructor(private http: HttpClient) {}

  login(user: User): Observable<User>{
    return this.http.post<User>(this.localhost, user, httpOptions)
  }
}
