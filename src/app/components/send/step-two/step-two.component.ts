import {
  Component,
  OnInit,
  AfterContentInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { map, switchMap, finalize } from 'rxjs/operators';
import { of, empty } from 'rxjs';

// firestore imports
import { AngularFireStorage } from '@angular/fire/storage';

import { MultiStepService } from '../../../services/multi-step.service';
import { SendData } from '../../../models/send-data';
import { sendValidationMessages } from '../../../shared/validations/send-validation-messages';
import { Product } from '../../../models/scroll/product';
import { Category } from '../../../models/scroll/category';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  preserveWhitespaces: true
})
export class StepTwoComponent implements OnInit, AfterContentInit {
  categorySelected = false;
  productSelected = false;
  objectTest: Product = null;
  showButton = true;
  @ViewChild('scrollWrapper', { static: false }) scrollWrapper: ElementRef;

  // selected products
  orderSelected = false;

  // form setup
  form: FormGroup;
  sendData: SendData = new SendData();

  validationMsgs = sendValidationMessages; // array of validation messages

  // image processing
  file: File;
  // imgSrc: string;
  imgSrc = 'assets/img/placeholder.jpg';

  product: Product[];
  category: Category[];
  categories: any = [];

  // stepper and view controls
  _showStepTwo = true;
  showStepTwo = true;
  showResult = false;

  /* slider att */
  public size_title = 'Pequeno: ';
  public size_to_show = 'Máx 5kg ou 100cm';
  public designation = '(Tamanho de caixa de sapatos)';

  constructor(
    private scrollService: ScrollService,
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
    });

    this.scrollService
      .getCategories()
      .subscribe(docs => (this.category = docs));

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
      orderSize: [null]
    });
  }

  ngAfterContentInit() {
    if (this.sendData) {
      this.form.get('orderDetails').setValue(this.sendData.orderDetails);
      this.form.get('orderSize').setValue(this.sendData.orderSize);
    }
  }

  selectCategory(category: Category) {
    this.categorySelected = true;
    this.productSelected = false;
    this.showButton = false;

    of(category)
      .pipe(
        map(category => this.category.filter(c => c.id === category.id)),
        map(categories =>
          categories && categories.length > 0 ? categories[0].id : empty()
        ),
        switchMap((idCategory: number) =>
          this.scrollService.getProducts(idCategory)
        )
      )
      .subscribe(products => (this.product = products));
  }

  // scrolling
  scrollRight() {
    this.scrollWrapper.nativeElement.scrollTo({
      left: this.scrollWrapper.nativeElement.scrollLeft + 150,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.scrollWrapper.nativeElement.scrollTo({
      left: this.scrollWrapper.nativeElement.scrollLeft - 150,
      behavior: 'smooth'
    });
  }
  // END scrolling

  fillProduct(product: Product) {
    this.productSelected = true;
    this.objectTest = product;
    this.orderSelected = true;
    this.addCategory(true, true, false);
    this.categories.push(this.objectTest.name);
  }

  addCategory(controlAdd?: boolean, controlCat?: boolean, controlPro?: boolean) {
    controlPro = true;
    // this.categories.push(this.objectTest.name);
    this.categorySelected = controlCat;
    this.productSelected = controlPro;

    this.orderSelected = controlAdd;
  }

  // addCategory() {
  //   this.categories.push(this.objectTest.name);
  //   this.categorySelected = false;
  //   this.productSelected = true;

  //   this.orderSelected = false;
  // }

  removeProduct() {
    this.categorySelected = false;
    this.productSelected = true;
    if (this.categories.length > 0) {
      this.categories.shift();
    }
    this.form.reset();
  }

  updateObject() {
    this.sendData.category = this.category[this.objectTest.category].name;
    this.sendData.product = this.objectTest.name;
    this.sendData.orderDetails = this.form.get('orderDetails').value;
    // this.sendData.orderSize = this.form.get('orderSize').value;
    this.sendData.orderSize = this.size_to_show;

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

  /* range value change */
  valueChange(event) {
    if (event.target.value == 0) {
      this.size_title = 'Pequeno: ';
      this.size_to_show = 'Máx 5kg ou 100cm';
      this.designation = '(Tamanho de caixa de sapatos)';
    }

    if (event.target.value == 1) {
      this.size_title = 'Médio: ';
      this.size_to_show = 'Máx 15kg ou 200cm';
      this.designation = '(Tamanho de caixa de Microondas)';
    }

    if (event.target.value == 2) {
      this.size_title = 'Grande: ';
      this.size_to_show = 'Máx 50kg ou 300cm';
      this.designation = '(Tamanho de caixa de Congelador)';
    }

    if (event.target.value == 3) {
      this.size_title = 'Extra-Grande: ';
      this.size_to_show = 'Mais de 50kg';
      this.designation = '(Tamanhos não listados)';
    }
  }

  onSubmit() {
    const file = this.file;
    const filePath = `images/order_send/${this.file.name
      .split('.')
      .slice(0, -1)
      .join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.sendData.orderImage = url;
            this.ms.addOrder(this.sendData);
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
