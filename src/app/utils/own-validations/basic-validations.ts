import { Validators } from "@angular/forms";
import { TypeInputs } from "src/app/components/reusables/inputs/inputs.interface";
import { OwnValidations } from './own-validations';

export default {
  basicInputsV: [{
    type: TypeInputs.email,
    validations: [
      Validators.required,
      OwnValidations.isEmail
    ],
    messages: [{
      nameValidator: 'required',
      message: 'Please provide your email.'
    },
    {
      nameValidator: 'email',
      message: ` Hmm, that email address doesn't look right.`
    }]
  }]
}
