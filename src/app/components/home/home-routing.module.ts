import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CodeConfirmComponent } from './register/code-confirm/code-confirm.component';
import { CarrierPicsComponent } from './register/carrier-pics/carrier-pics.component';
import { FilePickerOptionsComponent } from '../../shared/file-picker-options/file-picker-options.component';
import { CarrierDocsComponent } from './register/carrier-docs/carrier-docs.component';

const routes: Routes = [
  {
    path: '',   // 'home' => to be passed in on the parent route
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'confirm', component: CodeConfirmComponent },
      { path: 'carrier-pics', component: CarrierPicsComponent },
      { path: 'carrier-docs', component: CarrierDocsComponent },
      // To be removed
      { path: 'options', component: FilePickerOptionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
