import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


export interface CustomFormLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  readonly username = 'username';
  readonly password = 'password';
  readonly placeholderSignIn = 'Email';

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.buildForm();
    //this.emailCtrl.valueChanges.pipe(debounceTime(650)).subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  get usernameField() {
    return this.form.get(this.username)
  }

  get usernameFieldValid() {
    return this.usernameField.valid;
  }

  get passwordField() {
    return this.form.get(this.password)
  }

  get passwordFieldValid() {
    return this.passwordField.valid;
  }

  navigateToHome() {
    this.router.navigateByUrl('./');
  }

  navigateToSignIn() {
    this.router.navigateByUrl('./signin');
  }

  submitForm(event: Event) {
    event.preventDefault;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('debes llenar todo');
      return;
    }


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.email, Validators.maxLength(40), Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]]
    })


  }
}
