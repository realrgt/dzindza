import { PicsPreviewerModule } from './../../../shared/pics-previewer/pics-previewer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// custom imports
import { RegisterComponent } from './register.component';
import { HrModule } from '../../../shared/hr/hr.module';
import { CodeConfirmComponent } from './code-confirm/code-confirm.component';
import { CarrierPicsComponent } from './carrier-pics/carrier-pics.component';
import { CarrierDocsComponent } from './carrier-docs/carrier-docs.component';

@NgModule({
    declarations: [
        RegisterComponent,
        CodeConfirmComponent,
        CarrierPicsComponent,
        CarrierDocsComponent
    ],
    imports: [
        CommonModule,
        HrModule,
        PicsPreviewerModule,
        RouterModule
    ]
})
export class RegisterModule { }
