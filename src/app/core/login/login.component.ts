import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isDisabledButton = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.onChanges();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  onChanges(): void {
    this.loginForm.valueChanges.subscribe(
      () => this.validationForm()
    )
  }

  validationForm(): void {
    this.loginForm.valid ? this.isDisabledButton = false : this.isDisabledButton = true;
  }

  doLogin(): void {
    localStorage.setItem('user', this.loginForm.value.user);
    localStorage.setItem('password', this.loginForm.value.password);
    this.router.navigate(['home']);
  }
}
