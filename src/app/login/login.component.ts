import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= '';
  password = '';
  constructor() {}

  ngOnInit(): void {
  }
  // onLogin(name: string, password: string):{
  //   if(this.user == name and this.password == )
  // }
  onSubmit(): void {
    console.log('Tentou logar');
    console.log('Usuario: '+ this.user);
    console.log('Senha: '+ this.password);
  }

}
