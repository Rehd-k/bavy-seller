import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controllers } from 'chart.js';
import { UserauthService } from '../core/shared/services/userauth.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: UserauthService) { }

  regForm: FormGroup;
  loginForm: FormGroup;

  registration = true;
  logining = false;

  showRegForm() {
    this.registration = true;
    this.logining = false;
  }

  showLoginForm() {
    this.registration = false;
    this.logining = true;
  }


  getLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  getRegister() {
    this.regForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      companyNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  logIn() {
    this.auth.login(this.loginForm.value).subscribe();
  }

  get loginValues() {
    const controls = 'controls';
    return this.loginForm[controls];
  }

  get regValues() {
    const controls = 'controls';
    return this.regForm[controls];
  }

  register() {
    this.auth.register(this.regForm.value).subscribe();
  }

  ngOnInit(): void {
    this.showLoginForm();
    this.getRegister();
    this.getLogin();
  }


}
