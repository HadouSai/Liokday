import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonImportsModule } from 'src/app/components/common/common-imports.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { InputsModule } from 'src/app/components/reusables/inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonImportsModule,
    ReactiveFormsModule,
    MatStepperModule,
    FooterModule,
    InputsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule {

}
