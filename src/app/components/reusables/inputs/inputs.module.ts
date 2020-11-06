import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from './inputs.component';

@NgModule({
  declarations: [InputsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [InputsComponent]
})
export class InputsModule { }
