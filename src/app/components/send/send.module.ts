import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// angalar imports
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// custom imports
import { IntroStepComponent } from './intro-step/intro-step.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { FinalStepComponent } from './final-step/final-step.component';

// angular materil imports
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { SendComponent } from './send.component';
import { StepThreeComponent } from './step-three/step-three.component';

@NgModule({
  declarations: [
    SendComponent,
    IntroStepComponent,
    StepOneComponent,
    StepTwoComponent,
    FinalStepComponent,
    StepperComponent,
    StepThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SendModule {}
