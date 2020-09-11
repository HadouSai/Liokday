import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderService } from "./nav-header.service";

import { NavHeaderComponent } from './nav-header.component';


@NgModule({
  declarations: [NavHeaderComponent],
  imports: [CommonModule],
  exports: [NavHeaderComponent],
  providers: [NavHeaderService],
})
export class NavHeaderModule { }
