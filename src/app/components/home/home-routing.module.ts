import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CodeConfirmComponent } from './register/code-confirm/code-confirm.component';

const routes: Routes = [
  {
    path: '',   // 'home' => to be passed in on the parent route
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'confirm', component: CodeConfirmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
