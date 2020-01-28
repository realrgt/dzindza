import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular imports
import { FormsModule } from '@angular/forms';

// Custom imports
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';  // for lazy load

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
