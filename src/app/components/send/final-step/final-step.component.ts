import { Component, OnInit } from '@angular/core';
import { MultiStepService } from '../../../services/multi-step.service';
import { SendData } from '../../../mocks/send-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  preserveWhitespaces: true
})
export class FinalStepComponent implements OnInit {

  private sendData: SendData = new SendData();
  form: FormGroup;

  constructor(
    private ms: MultiStepService
  ) { }

  ngOnInit() {

    this.ms.data.subscribe(doc => {
      this.sendData = doc;
      console.log(this.sendData);
    });

  }

  addOrder() {
    console.log(this.sendData);
    this.ms.addOrder(this.sendData);
  }

}
