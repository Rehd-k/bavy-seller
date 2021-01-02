import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from './userauth.service';
import { MatDialog } from '@angular/material/dialog';
import { NotLogedInPopupComponent } from '../../../not-loged-in-popup/not-loged-in-popup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: UserauthService, private router: Router, private popUp: MatDialog) { }

  canActivate(): boolean {


    if (this.auth.storedToken() !== true) {
      const popedup  =  this.popUp.open(NotLogedInPopupComponent);
      popedup.backdropClick().subscribe(result => {
        this.router.navigate(['welcome']);
      });
      return false;
    } else {
      return true;
    }



  }

}
