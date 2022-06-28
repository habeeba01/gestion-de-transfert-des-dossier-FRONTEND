import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  


  constructor(private httpClient:HttpClient) { }


  getList(): Observable<any>{
    return this.httpClient.get<any>(environment.apiUrl+"acc/AllUsers");
  }

  create(user: User): Observable<Object>{
    return this.httpClient.post(environment.apiUrl+"acc/save", user);
  }

  getByUsername(username: string): Observable<any>{
    return this.httpClient.get<any>(environment.apiUrl+`utilisateurs/${username}`);
  }

  updatePassword(username:string ,newpass:string,user: User): Observable<Object>{
    return this.httpClient.put(environment.apiUrl+`acc/password/${username}/${newpass}`, user);
  }

  delete(id: string): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl+`utilisateurs/${id}`);
  }
}
