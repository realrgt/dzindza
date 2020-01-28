import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { LeevasComponent } from './leevas.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LeevasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeevasModule { }
