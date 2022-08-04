import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= '';
  password = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log('Tentou logar');
    console.log('Usuario: '+ this.user);
    console.log('Senha: '+ this.password);
  }

}
