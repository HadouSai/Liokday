import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [],
  providers: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ]
})
export class CommonImportsModule { }
