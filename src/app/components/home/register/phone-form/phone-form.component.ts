import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { homeValidationMessages } from '../../../../shared/validations/home-validation-messages';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['../register.component.scss']
})
export class PhoneFormComponent implements OnInit {

  form: FormGroup;
  validationMsgs = homeValidationMessages;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });
  }

  get phone() { return this.form.get('phone'); }

}
