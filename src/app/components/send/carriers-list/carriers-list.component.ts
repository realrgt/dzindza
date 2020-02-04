import { Component, OnInit } from '@angular/core';

// custom imports
import { CarrierService } from '../../../services/carrier.service';
import { Carrier } from '../../../models/carrier';

@Component({
  selector: 'app-step-three',
  templateUrl: './carriers-list.component.html',
  styleUrls: [`./carriers-list.component.scss`]
})
export class StepThreeComponent implements OnInit {

  expandStyle = 'in-down mt-3';   // FadeInDown effect and margin-top: 3

  cardClicked = false;
  selectedItem: Carrier;

  carriers: Carrier[];

  constructor(
    // private testService: TestService,
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
    this.expandStyle = 'mt-3';  // removes fadeInDown effect and keep margin-top: 3
    this.cardClicked = false;
  }
}
