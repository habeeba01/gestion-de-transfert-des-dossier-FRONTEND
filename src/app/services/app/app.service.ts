import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role2user } from 'app/models/role2user/role2user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }


  affect(userRole:Role2user): Observable<Object>{
    return this.httpClient.post(environment.apiUrl+"acc/roletouser", userRole);
  }
}
