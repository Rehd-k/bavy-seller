import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-loged-in-popup',
  templateUrl: './not-loged-in-popup.component.html',
  styleUrls: ['./not-loged-in-popup.component.scss']
})
export class NotLogedInPopupComponent implements OnInit {

  constructor(private popedUp: MatDialog, private router: Router) { }

  close() {
    this.popedUp.closeAll();
    this.router.navigate(['welcome']);
  }
  login() {
    this.popedUp.closeAll();
    this.router.navigate(['user']);
  }
   ngOnInit(): void {
  }

}
