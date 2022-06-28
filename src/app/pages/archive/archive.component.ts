import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Archive } from 'app/models/archive/archive';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { ArchiveService } from 'app/services/archive/archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
 public user:User=new User()
  public dossiers:Array<Archive>
  public numDossier:number
  public ar:Archive
  public taille:number



  constructor(private Archives:ArchiveService,private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.Archives.listDossier().subscribe(data=>{
      this.dossiers= data;
       this.taille=this.dossiers.length
     console.log(this.taille)
     console.log(this.dossiers)
       },err=>{
         console.log(err)
       })
  }


public search(){
if(this.numDossier!=null){
  this.Archives.getDossierById(this.numDossier).subscribe((data)=>{
    this.dossiers=data
    console.log(data)
    this.router.navigate(['/listById',data])
  },err=>{
    console.log(err)
  });
  }else{
  this.ngOnInit();
  }
  
  }

}
