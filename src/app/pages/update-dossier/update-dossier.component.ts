import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Algharama } from 'app/models/algharama/algharama';
import { Destination } from 'app/models/destcinationJugement/destination';
import { DestcriptionoJugementdescription } from 'app/models/destcriptiono-jugementdescription';
import { Description } from 'app/models/destcriptionossier/description';
import { Destinationn } from 'app/models/destinationDossier/destinationn';
import { Dossier } from 'app/models/dossier/dossier';
import { Forcat } from 'app/models/forcat/forcat';
import { Jugement } from 'app/models/jugement/jugement';
import { User } from 'app/models/user/user';
import { DescriptionService } from 'app/services/descDossier/description.service';
import { DescriptionJugService } from 'app/services/descJug/description.service';
import { DestinationService } from 'app/services/destinationDossier/destination.service';
import { DossierService } from 'app/services/dossier/dossier.service';

@Component({
  selector: 'app-update-dossier',
  templateUrl: './update-dossier.component.html',
  styleUrls: ['./update-dossier.component.css']
})
export class UpdateDossierComponent implements OnInit {
  //dossier
  public edit=new FormGroup({
    numDossier:new FormControl(''),
    date:new FormControl(''),
    descriptionDossierModel:new FormControl('')
  });
  //algharama
  public editA=new FormGroup({
    montant:new FormControl(''),
    assaeir:new FormControl(''),
  });
  //forcat
  public editF=new FormGroup({
    nom:new FormControl(''),
    cin:new FormControl('')
  });
  //jugement
  public editJ=new FormGroup({
    numJugement:new FormControl(''),
    dateJugement:new FormControl(''),
    jugementDescriptionModel :new FormControl('')
  });
  //
  public user:User=new User()
  public d:any
  public numDossier:number
  public descDossier:Array<Description>;
  public descJug:Array<DestcriptionoJugementdescription>;
  public destin:any
  public jugement:Jugement=new Jugement()
  public forcat:any
  public algharama:any
 //
  constructor(private route:ActivatedRoute,private router:Router,private ds:DossierService,private descriptionDossier:DescriptionService,private descriptionJug:DescriptionJugService,private des:DestinationService) {
   
   }
 
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
 
    this.numDossier = this.route.snapshot.params['numDossier'];
    this.ds.getDossierById(this.numDossier).subscribe(data => {
        console.log(data)
        this.d=data
         this.edit=new FormGroup({
          numDossier:new FormControl(data['numDossier']),
          date:new FormControl(data['date']),
          descriptionDossierModel:new FormControl(this.d.descriptionDossierModel.description),
         });
         this.editA=new FormGroup({
          montant:new FormControl(this.d.jugementModel.algharamaModels[0].montant),
          assaeir:new FormControl(this.d.jugementModel.algharamaModels[0].assaeir)
         });
         this.editJ=new FormGroup({
          numJugement:new FormControl(this.d.jugementModel.numJugement),
          dateJugement:new FormControl(this.d.jugementModel.dateJugement),
          jugementDescriptionModel :new FormControl(this.d.jugementModel.jugementDescriptionModel.description),

         });
         this.editF=new FormGroup({
          nom:new FormControl(this.d.jugementModel.forcatModel.nom),
          cin:new FormControl(this.d.jugementModel.forcatModel.cin)
         });
      }, error => console.log(error));
      ///
         //
     this.descriptionDossier.list().subscribe(data=>{
      console.log(data)
       this.descDossier=data
       //
       this.des.list().subscribe(data=>{
        this.destin=data
        console.log(data)
       })
   },err=>{
     console.log(err)
    })
    //
    this.descriptionJug.list().subscribe(data=>{
      this.descJug=data
      console.log(data)

    })
      
  }
 update(){
 
 
  this.forcat=<Forcat>this.editF.value
this.algharama=<Algharama>this.editA.value


 this.jugement=<Jugement>this.editJ.value
 this.jugement.algharamaModels=[
  this.algharama
 ]
 this.jugement.forcatModel=this.forcat

 

   this.d = <Dossier>this.edit.value;
   this.d.jugementModel=this.jugement
 this.ds.update(this.d).subscribe(data=>{
  
   data=this.d
  console.log(data)
  alert("تعديل جيد")
  this.router.navigate(['/listDossierById',this.d]);

 },err=>{
  alert("خطأ في التعديل")
  console.log(err)
  console.log(this.d)
 })
}

}