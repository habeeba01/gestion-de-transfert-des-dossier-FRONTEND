import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user/user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient: HttpClient;

  constructor(handler : HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public authenticate(user:User):Observable<any>{
    this.logout();
    return this.httpClient.post("http://localhost:8080/login", user);
  }

  public logout(){
    localStorage.clear();
  }

  public refreshtoken(accesstoken:String):Observable<any>{
    return this.httpClient.get("http://localhost:8080/refreshToken",
      {headers : new HttpHeaders({
          'Authorization' : "Bearer "+accesstoken
      })});
  }

  getDecodedAccessToken(token: any): any {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}
