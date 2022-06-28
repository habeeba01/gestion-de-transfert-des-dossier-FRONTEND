import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'app/models/role/role';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  getList(): Observable<any>{
    return this.httpClient.get<any>(environment.apiUrl+"acc/AllRoles");
  }


  getById(id: string): Observable<any>{
    return this.httpClient.get<any>(environment.apiUrl+`appRoles/${id}`);
  }



  delete(id: string): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl+`appRoles/${id}`);
  }
}
