import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'app/models/token/token';
import { User } from 'app/models/user/user';
import { AuthService } from 'app/services/auth/auth.service';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token :Token = new Token();

  public user:User = new User();

  constructor(private auth:AuthService, private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")!=null){
      this.router.navigate(['/user'])
    }
  }

  submit(){
    this.auth.authenticate(this.user).subscribe(data=>{
      this.token = data;
      localStorage.setItem("token", JSON.stringify(this.token));
      this.router.navigate(['/user'])
    },err=>{
      alert("Informations incorrects")
    })
  }
}
