import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { tap, map, switchMap, finalize } from 'rxjs/operators';
import { of, empty, Observable } from 'rxjs';

// firestore imports
import { AngularFireStorage } from '@angular/fire/storage';

import { TestService } from 'src/app/services/test.service';
import { Cidade } from 'src/app/models/cidade';
import { Estado } from 'src/app/models/estado';
import { MultiStepService } from '../../../services/multi-step.service';
import { SendData } from '../../../models/send-data';
import { sendValidationMessages } from '../../../shared/validations/send-validation-messages';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  preserveWhitespaces: true
})
export class StepTwoComponent implements OnInit, AfterContentInit {
  estadoSelected = false;
  cidadeSelected = false;
  objectTest: Cidade = null;
  showButton = true;

  // form setup
  form: FormGroup;
  sendData: SendData = new SendData();

  validationMsgs = sendValidationMessages; // array of validation messages

  // image processing
  file: File;
  imgSrc: string;

  uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;

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
    private ms: MultiStepService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.ms.data.subscribe(doc => {
      this.sendData.departure = doc.departure;
      this.sendData.destination = doc.destination;

      this.sendData.departureSpot = doc.departureSpot;
      this.sendData.receiverName = doc.receiverName;
      this.sendData.receiverContact = doc.receiverContact;
      // fill onComeBack
      this.sendData.category = doc.category;
      this.sendData.orderDetails = doc.orderDetails;
      this.sendData.product = doc.product;
      this.sendData.orderSize = doc.orderSize;
      console.log(this.sendData);
    });

    this.testService
      .getEstados()
      .subscribe(estados => (this.estados = estados));

    this.form = this.formBuilder.group({
      orderImage: [null, Validators.required],
      orderDetails: [
        null,
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(255)
        ]
      ],
      orderSize: [null, [Validators.required]]
    });
  }

  ngAfterContentInit() {
    if (this.sendData) {
      this.form.get('orderDetails').setValue(this.sendData.orderDetails);
      this.form.get('orderSize').setValue(this.sendData.orderSize);
    }
  }

  selectEstado(estado: Estado) {
    this.estadoSelected = true;
    this.cidadeSelected = false;
    this.showButton = false;

    of(estado)
      .pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        map(estado => this.estados.filter(e => e.id === estado.id)),
        map(estados =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((idEstado: number) => this.testService.getCidades(idEstado))
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

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.imgSrc = event.target.result);
    reader.readAsDataURL(file);
  }

  showOtherView() {
    this.showResult = !this.showResult;
    this.showStepTwo = !this.showStepTwo;

    if (this.showResult) {
      this.updateObject();
    }
  }

  onSubmit() {
    // this.ms.addOrder(this.sendData);

    const file = this.file;
    const filePath = `images/order_send/${this.file.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          console.log('Executei 1');
          fileRef.getDownloadURL().subscribe(url => {
            this.sendData.orderImage = url;
            this.ms.addOrder(this.sendData);
            console.log('Executei 2');
            // this.resetForm();
          });
        })
      )
      .subscribe();
  }

  resetForm() {
    this.ms.updateSendDataSource(null);
  }
}
