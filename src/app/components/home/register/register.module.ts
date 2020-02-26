import { PicsPreviewerModule } from './../../../shared/pics-previewer/pics-previewer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// phone number
import { InternationalPhoneModule } from 'ngx-intl-phone';  // this is too much HEAVY

// custom imports
import { RegisterComponent } from './register.component';
import { HrModule } from '../../../shared/hr/hr.module';
import { CodeConfirmComponent } from './code-confirm/code-confirm.component';
import { CarrierPicsComponent } from './carrier-pics/carrier-pics.component';
import { CarrierDocsComponent } from './carrier-docs/carrier-docs.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';

@NgModule({
    declarations: [
        RegisterComponent,
        CodeConfirmComponent,
        CarrierPicsComponent,
        CarrierDocsComponent,
        PhoneFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        InternationalPhoneModule,
        HrModule,
        PicsPreviewerModule
    ]
})
export class RegisterModule { }
