import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
