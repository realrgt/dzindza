import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom imports
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';
import { HrModule } from '../../shared/hr/hr.module';
import { HomeRoutingModule } from './home-routing.module';  // for lazy load
import { FilePickerOptionsModule } from '../../shared/file-picker-options/file-picker-options.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RegisterModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HrModule,
    FilePickerOptionsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
