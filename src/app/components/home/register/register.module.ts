import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { RegisterComponent } from './register.component';
import { HrModule } from '../../../shared/hr/hr.module';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        HrModule
    ]
})
export class RegisterModule { }
