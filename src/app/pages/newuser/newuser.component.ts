import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'app/models/role/role';
import { Role2user } from 'app/models/role2user/role2user';
import { User } from 'app/models/user/user';
import { AppService } from 'app/services/app/app.service';
import { RoleService } from 'app/services/role/role.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  public user : User = new User();
  public rolee:Role=new Role();
  public rolesToUser:Role2user=new Role2user();
  public rolees : Array<Role>;
  authenticate : User = new User();


  constructor(private role:RoleService, private router : Router, private users:UserService,private affect:AppService) { }

  ngOnInit(): void {

    this.authenticate = JSON.parse(localStorage.getItem("user"))
    this.role.getList().subscribe(data=>{
         this.rolees = data;
        },err=>{
          console.log(err);
       })

  }

  submit(){
 this.users.getByUsername(this.user.username).subscribe(data=>{
 
  
  
    alert("هذا المستخدم موجود")
  
  console.log(data)
 },err=>{
  this.users.create(this.user).subscribe(dataaa=>{
    this.rolesToUser.username=this.user.username
         this.affect.affect(this.rolesToUser).subscribe(dataa=>{
              console.log(dataa)
               alert("مضاف بشكل جيد")
                this.router.navigate(['/listeusers']);
  
          },err=>{
                alert("خطأ")
               console.log(err)
          })
 },err=>{
      alert("خطأ")
      console.log(err)
 })
 })
  
  
   }


  }


