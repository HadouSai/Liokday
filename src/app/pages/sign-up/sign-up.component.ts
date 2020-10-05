import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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
