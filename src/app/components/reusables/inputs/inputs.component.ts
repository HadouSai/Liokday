import { Component, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControlOptions, ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import regexValidators from '../../../utils/own-validations/regex-validators';
import basicValidations from '../../../utils/own-validations/basic-validations';
import { IInputs, TypeInputs } from './inputs.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true
    }
  ]
})
export class InputsComponent implements OnInit, ControlValueAccessor {

  @Input() type: IInputs = TypeInputs.text;
  @Input() placeholder: string = '';
  @Input() height: string = '44px';
  @Input() showValidations = true;
  @Input() fieldForm: FormControl;

  onChange = (_: any) => { }; // Registro del metodo RegisterOnChande
  onTouch = () => { }; // Registro del metodo onTouch

  currentValue = null;
  isDisabled: boolean;

  typeValidations: AbstractControlOptions;
  basicValidationField = null;

  constructor() { }

  ngOnInit(): void {
    this.getTypeValitadion();

  }

  getTypeValitadion() {
    if (this.showValidations && !this.fieldForm) return;

    this.basicValidationField = basicValidations.basicInputsV.find(field => field.type === this.type)
    if (!this.basicValidationField) {
      return;
    }
    this.initFieldForm();
  }

  initFieldForm() {
    this.fieldForm = new FormControl('', this.basicValidationField.validations);
  }

  onInput(value: string) {
    console.log(this.fieldForm);

    this.currentValue = value;
    this.onTouch();
    this.onChange(this.currentValue);
  }
// voy aca intentando que tome las validadiciones de una lista guardada
  // Escribe el valor en el componente por si viene un valor
  writeValue(value: IInputs): void {
    if (value) {
      this.currentValue = value;
    }
  }

  /** Recibe un callback function que sera llamada cuando cambie el valor
  puede ser externo o interno */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  readonly setHeight = () => this.isString(this.height) ? this.showValidations ? `calc(${this.height} + 26px)` : this.height : '44px';

  readonly isString = (string: string) => string && typeof string === 'string' && string.trim().length > 0;

}
