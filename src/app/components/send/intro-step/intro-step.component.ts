import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendData } from '../../../mocks/send-data';
import { MultiStepService } from '../../../services/multi-step.service';

@Component({
  selector: 'app-intro-step',
  templateUrl: './intro-step.component.html',
  styleUrls: ['./intro-step.component.scss']
})
export class IntroStepComponent implements OnInit {

  // form setup
  form: FormGroup;
  sendData: SendData;
  // formData = new FormData();

  /* animate css */
  showEffect = true;
  bounceIn = 'bounceIn';
  fadeIn = 'fadeIn';
  zoomIn = 'zoomIn';

  /* map option appear/desappear attributes */
  mapFromIcon = false;
  mapToIcon = false;
  mapFrom = false;
  mapTo = false;
  showFirst = true;
  showSecond = true;
  showThird = true;
  mapSelectButton = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ms: MultiStepService
  ) { }

  ngOnInit() {

    this.ms.data.subscribe(doc => console.log(doc) );

    this.form = this.formBuilder.group({
      departure: [null, [Validators.required]],
      destination: [null, [Validators.required]]
    });

    // transform sendData to an empty object form
    this.sendData = this.form.getRawValue();
  }
  /*
  animated CSS
  */

  /*
  onFocus
  */
  onFocusFrom() {
    this.mapFromIcon = true;
  }
  onFocusTo() {
    this.mapToIcon = true;
  }
  /*
  start functions to manipulate appear/disappear items when select
  */
  onSelectFrom() {
    this.mapFrom = true;
    this.mapFromIcon = false;
    this.mapSelectButton = true;
    this.showFirst = false;
  }
  onFromLocationSelect() {
    this.showFirst = true;
    this.mapFrom = false;
    this.mapFromIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  onSelectTo() {
    this.showThird = false;
    this.mapTo = true;
    this.mapToIcon = false;
    this.mapSelectButton = true;
  }
  onToLocationSelect() {
    this.showThird = true;
    this.mapTo = false;
    this.mapToIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  /*
  end functions to manipulate appear/disappear items when select
  */
 // go next step
 updateObject() {
    // this.router.navigate(['/step-one']);

    this.sendData.departure = this.form.get('departure').value;
    // console.log(this.sendData);
    this.sendData.destination = this.form.get('destination').value;
    // console.log(this.sendData);
    this.ms.updateSendDataSource(this.sendData);
 }

}
