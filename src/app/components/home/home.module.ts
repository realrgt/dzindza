import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular imports
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom imports
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';
import { HrModule } from '../../shared/hr/hr.module';
import { HomeRoutingModule } from './home-routing.module';  // for lazy load

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
    HrModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
