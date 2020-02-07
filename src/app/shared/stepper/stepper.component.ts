import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  /* stepprer show */
  @Input() public carryStepper: boolean = false;
  @Input() public sendStepper: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }
  
  
}
