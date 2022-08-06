import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder, private authService: UserService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onClick(){
    const val = this.form.value;
    if(val.name && val.password){
      this.authService.login(val.name , val.password)
        .subscribe(
          ()=>{ console.log('User Logged')
            this.router.navigateByUrl('/login')
          }
        )
    }
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log('Tentou logar');
    // console.log('Usuario: '+ this.name);
    // console.log('Senha: '+ this.password);
  }
}
