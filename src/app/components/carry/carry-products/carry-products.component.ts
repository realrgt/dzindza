import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carry-products',
  templateUrl: './carry-products.component.html',
  styleUrls: ['./carry-products.component.scss']
})
export class CarryProductsComponent implements OnInit {
  public showCarryProducts = true;

  // products views proprieties
  public listView = true;
  public mapView = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* change view function */
  changeView(list: boolean, map: boolean) {
    this.listView = list;
    this.mapView = map;
  }


  /* navigate */
  // go back
  goBack(){
    this.router.navigate(['/carry-search']);
  }

}
