import {AuthGuard} from "./auth.guard";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Routes =[
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'Home', component: HomeComponent, canActivate: [AuthGuard]} // No projeto do professor ele criou um chamado listagem
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule{}
