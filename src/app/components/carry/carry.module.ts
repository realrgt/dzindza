import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StepperModule } from 'src/app/shared/stepper/stepper.module';
import { CarrySearchComponent } from './carry-search/carry-search.component';
import { CarryProductsComponent } from './carry-products/carry-products.component';
import { CarryComponent } from './carry.component';



@NgModule({
  declarations: [
    CarrySearchComponent,
    CarryProductsComponent,
    CarryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StepperModule
  ]
})
export class CarryModule { }
