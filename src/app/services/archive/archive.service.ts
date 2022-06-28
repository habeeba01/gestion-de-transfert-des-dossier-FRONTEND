import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Archive } from 'app/models/archive/archive';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private httpClient:HttpClient) { }


  public listDossier():Observable<any>{
     return this.httpClient.get(environment.apiUrl+"archive/all")
  }



   getDossierById(id: number): Observable<any>{
   return this.httpClient.get<any>(environment.apiUrl+`archive/${id}`);
  }
  createDossier(employee: Archive): Observable<Object>{
    return this.httpClient.post(environment.apiUrl+"archive/save", employee);
  }
  deleteDossier(id: number): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl+`archiveModels/${id}`);
  }
}
