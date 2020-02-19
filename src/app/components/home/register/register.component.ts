import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth/auth.service';
import { homeValidationMessages } from 'src/app/shared/validations/home-validation-messages';
import { User } from '../../../core/auth/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterContentChecked {

  user: User;
  isGoogle: boolean = false;

  form: FormGroup;
  validationMsgs = homeValidationMessages;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });

  }

  ngAfterContentChecked() {
    if ( this.user !== undefined && this.isGoogle) {
      this.fillUserData(this.user);
    }
  }

  fillUserData(data: User) {
    this.name.setValue(data.displayName);
    this.email.setValue(data.email);
  }

  async googleSignIn() {
    await this.authService.googleSignIn();
    this.authService.user$.subscribe(data => {
      console.log(data);
      this.user = data;
    });
    this.isGoogle = true;
  }

  // form controls
  get name() { return this.form.get('name'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }

}
