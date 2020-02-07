import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultiStepService } from '../../../services/multi-step.service';
import { SendData } from '../../../mocks/send-data';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  // form setup
  form: FormGroup;
  sendData: SendData = new SendData();
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
  showThirth = true;
  mapSelectButton = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ms: MultiStepService
  ) { }

  ngOnInit() {

    this.ms.data.subscribe(doc => {
      console.log(doc);
      this.sendData.departure = doc.departure;
      this.sendData.destination = doc.destination;
    });

    this.form = this.formBuilder.group({
      departure: [null, [Validators.required]],
      departureSpot: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      receiverName: [null, [Validators.required]],
      receiverContact: [null, [Validators.required]]
    });
  }

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
    this.showThirth = false;
    this.mapTo = true;
    this.mapToIcon = false;
    this.mapSelectButton = true;
  }
  onToLocationSelect() {
    this.showThirth = true;
    this.mapTo = false;
    this.mapToIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  /*
  end functions to manipulate appear/desappear items when select
  */
  // go back step
  goBack() {
    this.router.navigate(['/intro-step']);
    this.showEffect = false;
  }

  updateObject() {

    this.sendData.departureSpot = this.form.get('departureSpot').value;
    this.sendData.receiverName = this.form.get('receiverName').value;
    this.sendData.receiverContact = this.form.get('receiverContact').value;

    this.ms.updateSendDataSource(this.sendData);
  }

}
