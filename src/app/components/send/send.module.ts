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
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    IntroStepComponent,
    StepOneComponent,
    StepTwoComponent,
    FinalStepComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // ScrollingModule,
    // MatCardModule
  ]
})
export class SendModule {}
