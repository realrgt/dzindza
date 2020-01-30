import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// custom imports
import { PicsPreviewerComponent } from './pics-previewer.component';

@NgModule({
    declarations: [
        PicsPreviewerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        PicsPreviewerComponent
    ]
})
export class PicsPreviewerModule { }
