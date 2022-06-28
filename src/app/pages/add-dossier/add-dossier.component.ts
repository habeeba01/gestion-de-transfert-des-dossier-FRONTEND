import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Algharama } from 'app/models/algharama/algharama';
import { Destination } from 'app/models/destcinationJugement/destination';
import { DestcriptionoJugementdescription } from 'app/models/destcriptiono-jugementdescription';
import { Description } from 'app/models/destcriptionossier/description';
import { Destinationn } from 'app/models/destinationDossier/destinationn';
import { Dossier } from 'app/models/dossier/dossier';
import { Forcat } from 'app/models/forcat/forcat';
import { Jugement } from 'app/models/jugement/jugement';
import { Nontransfert } from 'app/models/nontransfert/nontransfert';
import { User } from 'app/models/user/user';
import { DescriptionService } from 'app/services/descDossier/description.service';
import { DescriptionJugService } from 'app/services/descJug/description.service';
import { DestinationService } from 'app/services/destinationDossier/destination.service';
import { DestinationJugService } from 'app/services/destinationJug/destination.service';
import { DossierService } from 'app/services/dossier/dossier.service';
import { NontransfertService } from 'app/services/nontransfert/nontransfert.service';


@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.css']
})
export class AddDossierComponent implements OnInit {
  public dossier:Nontransfert=new Nontransfert();
  public jugement:Jugement=new Jugement();
  public forcat:Forcat=new Forcat();
  public algharama:Algharama=new Algharama()
  //description 
  public descDossier:Array<Description>;
  public descJug:Array<DestcriptionoJugementdescription>;
  //description ngModel dossier
  public descD:Description=new Description()
   //destination ngModel dossier
  public desD:Destinationn=new Destinationn()
   //description ngModel jugement
  public descJ:DestcriptionoJugementdescription=new DestcriptionoJugementdescription()
   //destination ngModel jugement
  public desJ:Destination=new Destination()
  //user 
  authenticate : User = new User();
  //
  public destin:any
  public descri:any


  constructor(private router:Router,private dossierService:DossierService,private descriptionJug:DescriptionJugService,private descriptionDossier:DescriptionService,private destinationdossier:DestinationService,private destinationJug:DestinationJugService,private nonTransfert:NontransfertService) { }

  ngOnInit(): void {
    this.authenticate = JSON.parse(localStorage.getItem("user"))
    //
     this.descriptionDossier.list().subscribe(data=>{
      console.log(data)
       this.descDossier=data
         this.destin=this.descD.destinationDossierModel
         this.destinationdossier.list().subscribe(data=>{
          this.destin=data
         })
   },err=>{
     console.log(err)
    })
    //
    this.descriptionJug.list().subscribe(data=>{
      this.descJug=data
      console.log(data)
      this.descri=this.descJ.jugementDestinationModel
      this.destinationJug.list().subscribe(data=>{
        this.descri=data
      })
    })
 
  }
  submit(){
    //forcat
      this.jugement.forcatModel=this.forcat
    //description&Destination jugement
    this.jugement.jugementDescriptionModel=this.descJ
  

      // jugement
          this.jugement.algharamaModels.push(this.algharama)
          this.dossier.jugementModel=this.jugement
       // description&Destination dossier
       this.dossier.descriptionDossierModel=this.descD
  
  
   //
    this.nonTransfert.createDossier(this.dossier).subscribe(data=>{
     alert("مضاف بشكل جيد")
     console.log(this.dossier)
      this.router.navigate(['/transfert']);
    
    },err=>{
      alert("يرجى تعبئة جميع الحقول المطلوبة")
      console.log(err)
      console.log(this.dossier)
    })
  }
  printPage() {
    window.print();
  }

}
