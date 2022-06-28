import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { Token } from 'app/models/token/token';
import { AuthService } from 'app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token : Token = new Token();

  constructor(private auth : AuthService) {  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = JSON.parse(localStorage.getItem("token")!);
    console.log(this.token)
    if (this.token!=null){
      const req = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+this.token.accesstoken
        }
      })
      return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 403){
          return this.auth.refreshtoken(this.token.refreshtoken).pipe(
            switchMap(data=>{
              this.token = data;
              localStorage.setItem("token", JSON.stringify(this.token))
              return next.handle(request.clone({
                setHeaders: {
                  Authorization: 'Bearer '+this.token.accesstoken
                }
              }));
            })
          )
        }
        return throwError(() => err);
      }));
    }
    return next.handle(request);
  }
}
