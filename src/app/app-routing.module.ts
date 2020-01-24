import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import { FinalStepComponent } from './components/send/final-step/final-step.component';
import { StepTwoComponent } from './components/send/step-two/step-two.component';
import { IntroStepComponent } from './components/send/intro-step/intro-step.component';
import { StepOneComponent } from './components/send/step-one/step-one.component';


const routes: Routes = [
  { path: '', component: IntroStepComponent },
  { path: 's1', component: StepOneComponent },
  { path: 's2', component: StepTwoComponent },
  { path: 'final', component: FinalStepComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
