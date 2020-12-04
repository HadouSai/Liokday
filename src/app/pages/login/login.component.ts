import { OwnValidations } from './../../utils/own-validations/own-validations';
import { Router } from '@angular/router';
import { ResolveValidations } from './../../utils/own-validations/resolve-validations';
import { TypeInputs } from './../../components/reusables/inputs/inputs.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


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

  home() {
    this.router.navigateByUrl('./');
  }

  submitForm(event: Event) {
    event.preventDefault;
    console.log(this.form);

    this.resolveValidations.basicValidation(this.errorMsg, this.form);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log(this.errorMsg)
      return;
    }
  }

  private buildForm() {
    //validaciones sincronas primero que las asincronas
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, OwnValidations.isEmail]],
      password: ['', [Validators.required, OwnValidations.isMinLength]]
    })
    //hacer un validador regex password por el trim() los espacios que me dejen

  }
}
