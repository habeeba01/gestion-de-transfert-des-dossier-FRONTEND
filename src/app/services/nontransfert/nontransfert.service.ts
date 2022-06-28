import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nontransfert } from 'app/models/nontransfert/nontransfert';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NontransfertService {

  constructor(private httpClient:HttpClient) { }

  public listDossier():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"nontransfert/all")
 }

 createDossier(employee: Nontransfert): Observable<Object>{
  return this.httpClient.post(environment.apiUrl+"nontransfert/save", employee);
}
 getDossierByDestination(id: string): Observable<any>{
   return this.httpClient.get<any>(environment.apiUrl+`nontransfert/${id}`);
 }
 deleteDossier(id: number): Observable<Object>{
  return this.httpClient.delete(environment.apiUrl+`nontransfert/${id}`);
}
update(dossier:Nontransfert): Observable<Object>{
  return this.httpClient.put(environment.apiUrl+`nontransfert/update`,dossier);
}
}
