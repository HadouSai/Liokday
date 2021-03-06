import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home.routing';
import { AsideModule } from '../components/common/aside/aside.module';
import { NavHeaderModule } from '../components/common/nav-header/nav-header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AsideModule,
    MatButtonModule,
    MatIconModule,
    NavHeaderModule
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
