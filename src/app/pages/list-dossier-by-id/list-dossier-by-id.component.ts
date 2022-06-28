import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from 'app/models/archive/archive';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { ArchiveService } from 'app/services/archive/archive.service';
import { DossierService } from 'app/services/dossier/dossier.service';

@Component({
  selector: 'app-list-dossier-by-id',
  templateUrl: './list-dossier-by-id.component.html',
  styleUrls: ['./list-dossier-by-id.component.css']
})
export class ListDossierByIdComponent implements OnInit {
  public numDossier: number;
  public user:User=new User()
  public d:any
  public Archive:Archive=new Archive()

  constructor(private ar:ArchiveService,private route: ActivatedRoute,private DossierService:DossierService,private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.numDossier = this.route.snapshot.params['numDossier'];
    this.DossierService.getDossierById(this.numDossier).subscribe(data => {
        console.log(data)
      
        this.d=data
      }, error => console.log(error));
  }
  public delete(id:number){
    
    this.DossierService.deleteDossier(id).subscribe(
      dataa => {
        this.d=dataa
         console.log(dataa);
       this.ar.getDossierById(this.numDossier).subscribe(data=>{
           this.Archive=data
           this.Archive.utilisateur=this.user
           this.ar.createDossier(this.Archive).subscribe(d=>{
            d=this.Archive
           })
       })
        console.log(this.Archive)
      this.router.navigate(['/listDossier'])
      },
      error => {
        console.log(error)
        alert("خطأ في الحذف ، يرجى التحقق من عدم استخدام إحدى البيانات في مكان ما")


      });
 
  }
  update(){
   //  this.DossierService.getDossierById(this.d.numDossier).subscribe(data=>{
    //    this.d=data
        this.router.navigate(['/updateDossier',this.d])
   // })
      
   
  }
 

}
