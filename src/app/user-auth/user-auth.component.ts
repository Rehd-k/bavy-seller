import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { UserauthService } from '../core/shared/services/userauth.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: UserauthService) { }

  regForm: FormGroup;

  getLogin() {

  }

  getRegister() {
    this.regForm = this.formBuilder.group ({
      email: ['', [Validators.required]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      companyNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  logIn() {

  }

  get loginValues() {
    return null;
  }

  get regValues() {
    const controls = 'controls';
    return this.regForm[controls];
  }

  register() {
    console.log(this.regForm.value);
    this.auth.register(this.regForm.value).subscribe();
  }

  ngOnInit(): void {
      this.getRegister();
  }

}
