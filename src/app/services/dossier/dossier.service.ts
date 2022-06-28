import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dossier } from 'app/models/dossier/dossier';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private httpClient:HttpClient) { }


  public listDossier():Observable<any>{
     return this.httpClient.get(environment.apiUrl+"dossier/all")
  }

  createDossier(employee: Dossier): Observable<Object>{
    return this.httpClient.post(environment.apiUrl+"dossier/add", employee);
  }

  getDossierById(id: number): Observable<any>{
    return this.httpClient.get<any>(environment.apiUrl+`dossier/${id}`);
  }

  updateDossier(id:number,data): Observable<Object>{
    return this.httpClient.put(environment.apiUrl+`dossierModels/${id}`,data);
  }
update(dossier:Dossier): Observable<Object>{
  return this.httpClient.put(environment.apiUrl+`dossier/update`,dossier);
}
  deleteDossier(id: number): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl+`dossier/${id}`);
  }
  byDate(start:string,end:string):Observable<Object>{
      return this.httpClient.get(environment.apiUrl+`dossier/date/${start}/${end}`)
  }
}
