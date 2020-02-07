import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// angalar imports
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// maps imports
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';

// custom imports
import { IntroStepComponent } from './intro-step/intro-step.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { SendComponent } from './send.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepperModule } from '../../shared/stepper/stepper.module';
import { CarryModule } from '../carry/carry.module';


@NgModule({
  declarations: [
    SendComponent,
    IntroStepComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StepperModule,
    CarryModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzYjPF_jdx1tITyS-rS_mKClL43CDg3ts'
    })
  ]
})
export class SendModule {}
