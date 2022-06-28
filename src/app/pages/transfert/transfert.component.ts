import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { DestinationService } from 'app/services/destinationDossier/destination.service';
import { NontransfertService } from 'app/services/nontransfert/nontransfert.service';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent implements OnInit {
  public destination:string
  public user:User=new User()
  public destin:any
  public dossier:any
  public taille:number
  public date:Date=new Date()
  public myDate:any

  constructor(private router:Router,private desService:DestinationService,private nonTr:NontransfertService) { }

  ngOnInit(): void {

    this.myDate=(this.date.getFullYear())+"-"+(this.date.getMonth() + 1)+"-"+(this.date.getUTCDate());
    console.log(this.myDate)
    this.user = JSON.parse(localStorage.getItem("user"))
    this.desService.list().subscribe(data=>{
      this.destin=data
    },err=>{
      console.log(err)
    })
    //
    this.nonTr.getDossierByDestination(this.destination).subscribe(data=>{
      this.dossier=data
      this.taille=this.dossier.length
      console.log(this.taille)
      console.log(data)
    },err=>{
      console.log(err)
    })
   
  }
search(){
  this.nonTr.getDossierByDestination(this.destination).subscribe(data=>{
    this.dossier=data
    this.taille=this.dossier.length
    console.log(this.taille)
    console.log(data)
  },err=>{
    console.log(err)
  })
}
delete(){
  for (let index = 0; index < this.dossier.length; index++) {
    const element = this.dossier[index];
   
    element.date=this.myDate
     this.nonTr.update(element).subscribe(data=>{

      data=element
      console.log(data)
      this.nonTr.deleteDossier(element.numDossier).subscribe(dataa=>{
     
        console.log(dataa)
    
      })
     },err=>{
      console.log(err)
     })
   
      
  }
  this.router.navigate(['/listDossier']);
}
}
