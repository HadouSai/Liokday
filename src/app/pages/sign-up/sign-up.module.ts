import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule
  ],
  exports: [SignUpComponent],
  providers: [],
})
export class SignUpModule {

}
