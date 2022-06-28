import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user/user';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public user:User=new User()
  public newpass:string
  public username:string

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    // localStorage.setItem("token", JSON.stringify(this.user))
    // this.user = JSON.parse(localStorage.getItem("user"));

  }


   submit(){
    this.userService.updatePassword(this.user.username,this.user.password,this.user).subscribe(data=>{
     // this.user=data
      console.log(data)
   
      this.router.navigate(['/'])
    },err=>{
      alert("تحقق من المعلومات الخاصة بك أو لم يتم العثور على هذا المستخدم")
      console.log(err)
      console.log(this.user)
    })
  }
}
