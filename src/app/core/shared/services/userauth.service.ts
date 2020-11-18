import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const helper = new JwtHelperService();
const TOKEN_KEY = 'access_token';
const jwt = localStorage.getItem('access_token');
const decodedToken = helper.decodeToken(jwt);
const expirationDate = helper.getTokenExpirationDate(jwt);
const isExpired = helper.isTokenExpired(jwt);

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  private apiBaseUrl = environment.url;
  token = 'token';

  constructor(private Http: HttpClient, private router: Router) {}

  register(credentials: any): Observable<any> {
    return this.Http
      .post(`${this.apiBaseUrl}seller/register`, credentials).pipe(

        tap((res) => {
          this.router.navigateByUrl('/marchant/Dashboard');
          localStorage.setItem(TOKEN_KEY, res[this.token]);
        }),
        shareReplay(),
        catchError((e) => {
          console.log(e.error);
          throw new Error(e);
        })
      );
  }



  login(credentials: any) {
    return this.Http
      .post(`${this.apiBaseUrl}seller/login`, credentials);

  }

  logout() {

  }
}
