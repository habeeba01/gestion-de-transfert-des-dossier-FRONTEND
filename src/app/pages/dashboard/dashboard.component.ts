import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { DossierService } from 'app/services/dossier/dossier.service';





@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  public start:string;
  public end:string;
  public dossier:any
  public taille:number

  public user : User = JSON.parse(localStorage.getItem("user"));


  constructor(private dossierService:DossierService,private router:Router) { }

  ngOnInit(): void {

    }

    search(){
        this.dossierService.byDate(this.start,this.end).subscribe(data=>{
           this.dossier=data
           this.taille=this.dossier.length
           console.log(this.taille)
            console.log(data)
        },err=>{
            console.log(err)
        })
    }
 

}
