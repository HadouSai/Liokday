import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CommonImportsModule } from '../common-imports.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonImportsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
