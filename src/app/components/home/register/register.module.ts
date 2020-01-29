import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// custom imports
import { RegisterComponent } from './register.component';
import { HrModule } from '../../../shared/hr/hr.module';
import { CodeConfirmComponent } from './code-confirm/code-confirm.component';

@NgModule({
    declarations: [
        RegisterComponent,
        CodeConfirmComponent
    ],
    imports: [
        CommonModule,
        HrModule,
        RouterModule
    ]
})
export class RegisterModule { }
