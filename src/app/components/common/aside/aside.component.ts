import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AsideService } from './aside.service';
import { asideSections } from './aside-default';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/index.reducers';

import { asideClosed } from '../../../reducers/aside/aside.actions';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  opened: boolean;
  //opened2$: Observable<boolean>;

  listItems = asideSections;

  constructor(private asideS: AsideService, private store: Store<State>) {
    this.store.select(data => data.asideState.opened).subscribe(c => { if (c) this.onToggleAside(); });
  }

  ngOnInit(): void {

  }

  /** Abre o cierra el aside menu, agrega una clase para abrir el menu */
  onToggleAside = () => {
    this.sidenav.toggle();
    document.querySelector('mat-sidenav-container').classList.toggle('show-aside');
  }

  /** Al cerrarce el Aside Menu */
  closeAside = () => {
    document.querySelector('mat-sidenav-container').classList.remove('show-aside');
    document.body.style.overflow = '';

    this.store.dispatch(asideClosed({ asideState: { opened: false } }));
  }

  openAside = () => {
    document.querySelector('mat-sidenav-container').classList.add('show-aside');
    document.body.style.overflow = 'hidden';
  }

}
