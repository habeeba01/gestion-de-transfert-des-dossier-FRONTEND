import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from 'app/models/archive/archive';
import { Dossier } from 'app/models/dossier/dossier';
import { User } from 'app/models/user/user';
import { ArchiveService } from 'app/services/archive/archive.service';
import { DossierService } from 'app/services/dossier/dossier.service';

@Component({
  selector: 'app-list-by-id',
  templateUrl: './list-by-id.component.html',
  styleUrls: ['./list-by-id.component.css']
})
export class ListByIdComponent implements OnInit {
  public numDossier: number;
  public user:User=new User()
  public dossiers:Array<Archive>
  public dossier:any

  constructor(private Archive:ArchiveService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.numDossier = this.route.snapshot.params['numDossier'];
    this.Archive.getDossierById(this.numDossier).subscribe(data => {
        console.log(data)
        this.dossiers = data;
        this.dossier=data
      }, error => console.log(error));
    
 
  }
  public delete(id:number){
    
    this.Archive.deleteDossier(id).subscribe(
      dataa => {
        this.dossier=dataa
         console.log(dataa);
     
      this.router.navigate(['/archive'])
      },
      error => {
        console.log(error)
        alert("خطأ في الحذف ، يرجى التحقق من عدم استخدام إحدى البيانات في مكان ما")

      });
 
  }

}
