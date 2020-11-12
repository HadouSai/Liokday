import { Component, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
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

  private readonly RegexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { }

  ngOnInit(): void {

  }

  onInput(value: string) {
    console.log(this.fieldForm);

    this.currentValue = value;
    this.onTouch();
    this.onChange(this.currentValue);
  }

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
