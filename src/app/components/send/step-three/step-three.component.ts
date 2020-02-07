import { Component, OnInit } from '@angular/core';

// custom imports
import { CarrierService } from '../../../services/carrier.service';
import { Carrier } from '../../../models/carrier';

@Component({
  selector: 'app-step-three',
  // carry routes
  templateUrl: './step-three.component.html',
  styleUrls: [`./step-three.component.scss`]
})
export class StepThreeComponent implements OnInit {

  expandStyle = 'animated fadeIn px-4 py-2';   // FadeInDown effect and margin-top: 3

  cardClicked = false;
  selectedItem: Carrier;

  carriers: Carrier[];

  // show step-three
  showStepThree = true;

  constructor(
    private carrierService: CarrierService
  ) {}

  ngOnInit() {
    this.carrierService.getCarriers().subscribe(docs => this.carriers = docs);
  }

  /**
   * Alternates div list selected value
   */
  onClicked(estado) {
    // this.cardClicked = !this.cardClicked;
    this.cardClicked = true;
    this.selectedItem = estado;
  }

  /**
   * Returns card selected value to false
   */
  askToSend() {
    this.expandStyle = 'px-4 py-2';  // removes fadeInDown effect and keep margin-top: 3
    this.cardClicked = false;
  }
}
