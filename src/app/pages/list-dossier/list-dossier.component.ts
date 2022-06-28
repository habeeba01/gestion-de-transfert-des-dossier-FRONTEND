import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { AppService } from 'app/services/app/app.service';
import { DossierService } from 'app/services/dossier/dossier.service';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {
  public user:User=new User()
  public dossiers:any
  public numDossier:number
  public ar:Dossier
  public taille:number


  constructor(private router:Router,private DossierService:DossierService,private appS:AppService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.DossierService.listDossier().subscribe(data=>{
      this.dossiers= data;
       this.taille=this.dossiers.length
        console.log(this.dossiers)
       },err=>{
         console.log(err)
       })
  }

  public search(){
   
      this.DossierService.getDossierById(this.numDossier).subscribe((data)=>{
       
        this.dossiers=data
        console.log(data)
        if(data==null){
          alert("المجلد غير موجود ، يرجى التحقق من قائمة المجلدات التي لم يتم نقلها ")
        }
        this.router.navigate(['/listDossierById',data])
      },err=>{
        alert("الرجاء إدخال الأرقام الصحيحة ")
        console.log(err)
      });
    
      
      }
 

}
