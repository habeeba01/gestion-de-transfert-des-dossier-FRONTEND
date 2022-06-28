import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user/user';
import { UserService } from 'app/services/user/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

  public user : User = new User();
  constructor(private router:Router,private userService:UserService){}
    ngOnInit(){
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user)
    }
 
}
