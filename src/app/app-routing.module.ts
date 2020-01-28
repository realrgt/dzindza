import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import { FinalStepComponent } from './components/send/final-step/final-step.component';
import { StepTwoComponent } from './components/send/step-two/step-two.component';
import { IntroStepComponent } from './components/send/intro-step/intro-step.component';
import { StepOneComponent } from './components/send/step-one/step-one.component';
import { HomeComponent } from './components/home/home.component';
import { CarryComponent } from './components/carry/carry.component';
import { CarrierListComponent } from './components/carry/carrier-list/carrier-list.component';
import { StepThreeComponent } from './components/send/step-three/step-three.component';

const routes: Routes = [
  // send routes
  { path: '', pathMatch: 'full', redirectTo: 'intro-step' },
  { path: 'intro-step', component: IntroStepComponent },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'final', component: FinalStepComponent },
  // carry routes
  { path: 'carrier-detail', component: CarryComponent },
  { path: 'carriers', component: CarrierListComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
