import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { FilePickerOptionsComponent } from './file-picker-options.component';
import { HrModule } from '../hr/hr.module';

@NgModule({
  declarations: [FilePickerOptionsComponent],
  imports: [
    CommonModule,
    HrModule
  ],
  exports: [FilePickerOptionsComponent]
})
export class FilePickerOptionsModule { }
