import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigateByUrl('./');
  }

  navigateToSignIn() {
    this.router.navigateByUrl('./signin');
  }

}
