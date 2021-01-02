import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from './userauth.service';

@Injectable({
  providedIn: 'root'
})
export class UserPageGuardService {


  constructor(private auth: UserauthService, private router: Router) { }

  canActivate(): boolean {


    if (this.auth.storedToken() !== true) {
      return true;
    } else {
      this.router.navigate(['marchant/Dashboard']);
      return false;
    }



  }

}
