import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// custom imports
import { PicsPreviewerComponent } from './pics-previewer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PicsPreviewerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        PicsPreviewerComponent
    ]
})
export class PicsPreviewerModule { }
