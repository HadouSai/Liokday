import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeInputs } from 'src/app/components/reusables/inputs/inputs.interface';
import { OwnValidations } from 'src/app/utils/own-validations/own-validations';
import { ResolveValidations } from 'src/app/utils/own-validations/resolve-validations';


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

  resolveValidations = new ResolveValidations();

  errorMsg = {
    email: '',
    password: ''
  };

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

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.resolveValidations.basicValidation(this.errorMsg, this.form);
      console.log(this.errorMsg)
      return;
    }
  }

  private buildForm() {
    //validaciones sincronas primero que las asincronas
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, OwnValidations.isEmail]],
      password: ['', [Validators.required, OwnValidations.isPassword, Validators.maxLength(20)]]
    })
    //hacer un validador regex password por el trim() los espacios que me dejen

  }
}
