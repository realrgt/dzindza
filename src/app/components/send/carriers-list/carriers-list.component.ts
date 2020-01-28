import { Component, OnInit } from '@angular/core';

// custom imports
import { Estado } from '../../../models/estado';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './carriers-list.component.html',
  styleUrls: [`./carriers-list.component.scss`]
})
export class StepThreeComponent implements OnInit {

  expandStyle = 'in-down mt-3';   // FadeInDown effect and margin-top: 3

  cardClicked = false;
  selectedItem: Estado;

  estados: Estado[];

  constructor(
    private testService: TestService
  ) {}

  ngOnInit() {
    this.testService
      .getEstados()
      .subscribe(
        docs => this.estados = docs
      );
  }

  /**
   * Alternates div list selected value
   */
  onClicked(estado: Estado) {
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
