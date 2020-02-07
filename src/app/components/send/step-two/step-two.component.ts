import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { tap, map, switchMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';

import { TestService } from 'src/app/services/test.service';
import { Cidade } from 'src/app/models/cidade';
import { Estado } from 'src/app/models/estado';
import { MultiStepService } from '../../../services/multi-step.service';
import { SendData } from '../../../mocks/send-data';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  preserveWhitespaces: true
})
export class StepTwoComponent implements OnInit {

  estadoSelected = false;
  cidadeSelected = false;
  objectTest: Cidade = null;

  // form setup
  form: FormGroup;
  sendData: SendData = new SendData();

  cidades: Cidade[];
  estados: Estado[];
  categories: any = [];

  // stepper and view controls
  _showStepTwo = true;
  showStepTwo = true;
  showResult = false;

  constructor(
    private testService: TestService,
    private formBuilder: FormBuilder,
    private ms: MultiStepService
  ) {}

  ngOnInit() {
    this.ms.data.subscribe(doc => {
      this.sendData.departure = doc.departure;
      this.sendData.destination = doc.destination;

      this.sendData.departureSpot = doc.departureSpot;
      this.sendData.receiverName = doc.receiverName;
      this.sendData.receiverContact = doc.receiverContact;
      console.log(this.sendData);
    });

    this.testService
      .getEstados()
      .subscribe(estados => (this.estados = estados));

    this.form = this.formBuilder.group({
      orderDetails: [null, [Validators.required]],
      orderSize: [null, [Validators.required]]
    });
  }

  selectEstado(estado: Estado) {
    this.estadoSelected = true;
    this.cidadeSelected = false;

    of(estado)
      .pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        map(estado => this.estados.filter(e => e.id === estado.id)),
        map(estados =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((idEstado: number) => this.testService.getCidades(idEstado)),
      )
      .subscribe(cidades => (this.cidades = cidades));
  }

  fillCity(cidade: Cidade) {
    this.cidadeSelected = true;
    this.objectTest = cidade;
    console.log(this.objectTest);
  }

  addCategory() {
    this.categories.push(this.objectTest.nome);
    for (const c of this.categories) {
      console.log(c);
    }
    this.estadoSelected = false;
    this.cidadeSelected = true;
  }

  removeProduct() {
    this.estadoSelected = false;
    this.cidadeSelected = true;
    if (this.categories.length > 0) {
      this.categories.shift();
    }
    this.form.reset();
  }

  updateObject() {
    this.sendData.category = this.estados[this.objectTest.estado].nome;
    this.sendData.product = this.objectTest.nome;
    this.sendData.orderDetails = this.form.get('orderDetails').value;
    this.sendData.orderSize = this.form.get('orderSize').value;

    this.ms.updateSendDataSource(this.sendData);
  }

  showOtherView() {
    this.showResult = !this.showResult;
    this.showStepTwo = !this.showStepTwo;

    if (this.showResult) {
      this.updateObject();
    }

  }

  onSubmit() {
    this.ms.addOrder(this.sendData);
  }

}
