import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { HrComponent } from '../hr/hr.component';

@NgModule({
    declarations: [HrComponent],
    imports: [
        CommonModule
    ],
    exports: [HrComponent]
})
export class HrModule { }
