import { AbstractControl } from '@angular/forms';
import RegexValidators from './regex-validators';

export class OwnValidations {

  static isYounger(control: AbstractControl) {
    const value = control.value;

    if (value < 18) {
      return { isYounger: true };
    }

    // si todo bien retorno null
    return null;
  }

  static isEmail(control: AbstractControl) {
    const value = control.value;
    console.log('pase por aca')
    return value.match(RegexValidators.isEmail) ? null : { email: true };
  }

  // Funciones personaliszadas con parametros
  // Closures
  static isYoungerWithParams(limit: number) {
    return (control: AbstractControl) => {
      const value = control.value;

      if (value < limit) {
        return { isYounger: true };
      }

      // si todo bien retorno null
      return null;


    }
  }


}
