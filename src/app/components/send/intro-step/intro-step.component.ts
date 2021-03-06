import { Component, OnInit, ViewChild, AfterContentInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendData } from '../../../models/send-data';
import { MultiStepService } from '../../../services/multi-step.service';

// google-place-autocomplete
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { GeoLocationService } from 'src/app/services/geo-location.service';

// const imports
import { sendValidationMessages } from '../../../shared/validations/send-validation-messages';

@Component({
  selector: 'app-intro-step',
  templateUrl: './intro-step.component.html',
  styleUrls: ['./intro-step.component.scss']
})
export class IntroStepComponent implements OnInit, AfterContentInit {
  constructor(
    private formBuilder: FormBuilder,
    private ms: MultiStepService,
    public geoLocationService: GeoLocationService
  ) {}

  // form setup
  form: FormGroup;
  sendData: SendData;

  validationMsgs = sendValidationMessages; // array of validation messages

  // google-place-autocomplete
  @ViewChild('placesRef', { static: false }) placesRef: GooglePlaceDirective;
  // place autocomplete
  formattedAddress = '';
  selecteAddress = '';

  /* AGM */
  coordinates: any;
  // title = "Encontre no Mapa";
  latitude: number = -25.96553;
  longitude: number = 32.58322;
  locationChosen = false;

  /* animate css */
  showEffect = true;
  bounceIn = 'bounceIn';
  fadeIn = 'fadeIn';
  zoomIn = 'zoomIn';

  /* map option appear/disappear attributes */
  mapFromIcon = false;
  mapToIcon = false;
  mapFrom = false;
  mapTo = false;
  showFirst = true;
  showSecond = true;
  showThird = true;
  mapSelectButton = false;

  /* google-places-autocomplete method */
  /* country restrictions */
  options = {
    componentRestrictions: {
      country: ['MZ', 'SA']
    }
  };

  ngOnInit() {

    console.log(this.validationMsgs);

    this.ms.data.subscribe(doc => {
      // console.log(doc);
      this.sendData = doc;

      // fill onComeBack
      this.sendData.departure = doc.departure;
      this.sendData.destination = doc.destination;
      this.sendData.category = doc.category;
      this.sendData.departureSpot = doc.departureSpot;
      this.sendData.orderDetails = doc.orderDetails;
      this.sendData.product = doc.product;
      this.sendData.receiverName = doc.receiverName;
      this.sendData.receiverContact = doc.receiverContact;

      console.log(this.sendData);

    });

    this.form = this.formBuilder.group({
      departure: [null, [Validators.required]],
      destination: [null, [Validators.required]]
    });

    // picking actual google-map location
    this.geoLocationService.getPosition().subscribe((position: Position) => {
      this.coordinates = {
        latitude: +position.coords.latitude,
        longitude: +position.coords.longitude
      };
    });

  }

  ngAfterContentInit() {
    if (this.sendData) {
      this.form.get('departure').setValue(this.sendData.departure);
      this.form.get('destination').setValue(this.sendData.destination);
    }
  }

  public handleAddressChange1(address1: any) {
    this.formattedAddress = address1.formatted_address;
    // this.sendStep1.get('local_partida').setValue(this.formattedAddress);
  }

  public handleAddressChange2(address2: any) {
    this.formattedAddress = address2.formatted_address;
    // this.sendStep1.get('local_destino').setValue(this.formattedAddress);
  }
  /* AGM choose location */
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    console.log((this.latitude = event.coords.lat));
    console.log((this.longitude = event.coords.lng));
  }

  // onFocus - animated css
  onFocusFrom() {
    this.mapFromIcon = true;
  }
  onFocusTo() {
    this.mapToIcon = true;
  }

// start functions to manipulate appear/disappear items when select

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

  updateObject() {
    this.sendData.departure = this.form.get('departure').value;
    this.sendData.destination = this.form.get('destination').value;
    this.ms.updateSendDataSource(this.sendData);
  }

}
