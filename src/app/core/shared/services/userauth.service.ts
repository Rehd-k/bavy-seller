import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable} from 'rxjs';
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
  userInfo: any;
  user: Observable<any>;
  userData = new BehaviorSubject(null);
  readyStuff: Observable<any>;

  constructor(private Http: HttpClient, private router: Router) {
    this.storedToken();
  }

  storedToken() {
    if (jwt) {
      if (!isExpired) {
        this.userInfo = decodedToken;
        this.userData.next(decodedToken);
        return true;
      } else {
        localStorage.removeItem(TOKEN_KEY);
        return null;
      }
    } else {
      return null;
    }


  }

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
      .post(`${this.apiBaseUrl}seller/login`, credentials).pipe(
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

  logout() {

  }
}
