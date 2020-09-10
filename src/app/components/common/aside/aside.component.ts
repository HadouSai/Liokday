import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AsideService } from './aside.service';
import { asideSections } from './aside-default';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  opened: boolean;

  listItems = asideSections;

  constructor(public asideS: AsideService) { }

  ngOnInit(): void {
  }

  /** Abre o cierra el aside menu, agrega una clase para abrir el menu */
  onToggleAside = () => {
    this.sidenav.toggle();
    document.querySelector('mat-sidenav-container').classList.toggle('show-aside');
  }

  /** Add or remove al abrir o cerrar el Aside Menu */
  closeAside = () => {
    document.querySelector('mat-sidenav-container').classList.remove('show-aside');
    document.body.style.overflow = '';
  }

  openAside = () => {
    document.querySelector('mat-sidenav-container').classList.add('show-aside');
    document.body.style.overflow = 'hidden';
  }

}
