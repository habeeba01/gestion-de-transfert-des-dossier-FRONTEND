import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient : HttpClient) { }

  public profile():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"acc/profile");
  }

  public loadUser(username:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"utilisateurs/search/profile?username="+username);
  }
}
