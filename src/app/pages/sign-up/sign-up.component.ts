import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeInputs } from 'src/app/components/reusables/inputs/inputs.interface';
import { OwnValidations } from 'src/app/utils/own-validations/own-validations';


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

  readonly username = TypeInputs.email;
  readonly password = 'password';
  readonly placeholderSignIn = 'Email';
  readonly placeholderPassword = 'Password';

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
    console.log(this.form)

    /*     if (this.form.invalid) {
          this.form.markAllAsTouched();
          alert('debes llenar todo');
          return;
        } */


  }

  private buildForm() {
    //validaciones sincronas primero que las asincronas
    this.form = this.formBuilder.group({
      email: [''],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]]
    })


  }
}
