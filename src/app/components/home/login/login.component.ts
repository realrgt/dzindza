import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { homeValidationMessages } from '../../../shared/validations/home-validation-messages';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {

  name = '';

  form: FormGroup;

  validationMsgs = homeValidationMessages;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-z0-9]+)$')]]
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {
    const formValue = this.form.getRawValue();
    console.log(formValue);
    this.authService.emailLogin(this.email.value, this.password.value)
      .then(() => {
        this.router.navigate(['/']);
        this.email.setValue(null);
        this.password.setValue(null);
      });
  }

}
