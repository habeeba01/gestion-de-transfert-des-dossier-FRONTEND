import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { User } from 'app/models/user/user';
import { UserService } from 'app/services/user/user.service';
import { data } from 'jquery';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.css']
})
export class ListeusersComponent implements OnInit {
  public users:any
  public user:User=new User();

 

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
       this.user = JSON.parse(localStorage.getItem("user"));
   
       this.userService.getList().subscribe(data=>{
      this.users = data;
     console.log(this.users)
       },err=>{
         console.log(err)
       })
 
  }
  public delete(username:string){
    
    this.userService.delete(username).subscribe(
      dataa => {
        this.users=dataa
         console.log(dataa);
       this.ngOnInit();
       
      },
      error => {
        alert("خطأ في الحذف ")
      });
 
  }

}
