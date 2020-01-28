import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarryComponent } from './carry.component';
import { CarrierListComponent } from './carrier-list/carrier-list.component';

@NgModule({
    declarations: [
        CarryComponent,
        CarrierListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CarryModule { }
