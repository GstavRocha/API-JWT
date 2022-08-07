import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  user?: User;
  constructor(private  activeRoute: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id')?
      parseInt(this.activeRoute.snapshot.paramMap.get('id')!): 0;

    this.service.getById(this.id).subscribe({ // parei em subscribe
      next: (usuarioRetorno: User) => this.user = usuarioRetorno
    });

  }
}


