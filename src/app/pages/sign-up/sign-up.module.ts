import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonImportsModule } from 'src/app/components/common/common-imports.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonImportsModule,
    MatStepperModule,
    SignUpRoutingModule,
    FooterModule
  ],
  exports: [SignUpComponent],
  providers: [],
})
export class SignUpModule {

}
