import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonImportsModule } from 'src/app/components/common/common-imports.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { InputsModule } from 'src/app/components/reusables/inputs/inputs.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonImportsModule,
    MatStepperModule,
    SignUpRoutingModule,
    FooterModule,
    InputsModule
  ],
  exports: [SignUpComponent],
  providers: [],
})
export class SignUpModule {

}
