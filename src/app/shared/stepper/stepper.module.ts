import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }
