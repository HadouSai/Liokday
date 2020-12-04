import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/index.reducers';

import { asideOpened } from '../../../reducers/aside/aside.actions';


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit(): void {

  }

  onToggleAside() {
    this.store.dispatch(asideOpened({ asideState: { opened: true } }));
  }

  toSignIn() {

  }

  toSignUp() {
    this.router.navigateByUrl('/login');
  }

}
