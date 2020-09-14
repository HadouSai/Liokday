import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderService } from "./nav-header.service";

import { NavHeaderComponent } from './nav-header.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [NavHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule],
  exports: [NavHeaderComponent],
  providers: [NavHeaderService]
})
export class NavHeaderModule { }
