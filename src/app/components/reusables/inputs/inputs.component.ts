import { Component, Input, OnInit } from '@angular/core';
import { IInputs, TypeInputs } from './inputs.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @Input() type: IInputs = TypeInputs.text;
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
