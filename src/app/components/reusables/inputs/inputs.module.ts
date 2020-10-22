import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsComponent } from './inputs.component';

@NgModule({
  declarations: [InputsComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [InputsComponent]
})
export class InputModule { }
