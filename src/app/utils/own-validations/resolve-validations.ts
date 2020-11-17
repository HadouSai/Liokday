import { FormGroup } from '@angular/forms';
import basicValidations from './basic-validations';
import { BasicInputsI } from './validations-i.interface';


export class ResolveValidations {

  basicField: BasicInputsI;

  basicValidation(obj: any, { controls }: FormGroup) {
    if (!controls || !obj) return;

    for (const key in controls) {

      if (!controls[key].errors) {
        obj[key] = '';
        return;
      }

      this.basicField = basicValidations.basicInputsV.find(field => field.type === key);
      if (!this.basicField) return;

      const msgError = this.basicField.validator.find(c => controls[key].errors[c.nameValidator]);
      if (!msgError) return;
      obj[key] = msgError.message;
    }
  }
}

