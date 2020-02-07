import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import { StepTwoComponent } from './components/send/step-two/step-two.component';
import { IntroStepComponent } from './components/send/intro-step/intro-step.component';
import { StepOneComponent } from './components/send/step-one/step-one.component';
import { CarryComponent } from './components/carry/carry.component';
import { StepThreeComponent } from './components/send/step-three/step-three.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // home lazy-loading
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  // send routes
  { path: 'intro-step', component: IntroStepComponent },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  // carry routes
  { path: 'carrier-detail', component: CarryComponent },
  // wildcard
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
