import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AsideService } from './aside.service';
import { asideSections } from './aside-default';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/index.reducers';

import { asideClosed } from '../../../reducers/aside/aside.actions';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  showAside = false;
  listItems = asideSections;

  constructor(private asideS: AsideService, private store: Store<State>, private cdk: ChangeDetectorRef) {
    this.store.select(data => data.asideState.opened).subscribe(c => this.onToggleAside(c));
  }

  onToggleAside(c: boolean) {
    this.showAside = c;
    c && this.sidenav.open();
    this.cdk.markForCheck();
  }

  closeAside() {
    if (!this.showAside) { return; }
    this.store.dispatch(asideClosed({ asideState: { opened: false } }));
  }

  openAside = () => { }

}
