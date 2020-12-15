import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordFieldText: boolean;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.passwordFieldText = false;
  }

  get f() {
    return this.loginForm.controls;
  }

  showHidepassword() {
    this.passwordFieldText = !this.passwordFieldText;
  }
}
