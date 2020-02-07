import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carry-search',
  templateUrl: './carry-search.component.html',
  styleUrls: ['./carry-search.component.scss']
})
export class CarrySearchComponent implements OnInit {

  // show carry-search
  public showCarry = true;

  /* animate css */
  showEffect = true;
  fadeIn = "fadeIn";
  zoomIn = "zoomIn";
  
  /* map option appear/desappear attributes */
  mapFromIcon = false;
  mapToIcon = false;
  mapFrom = false;
  mapTo = false;
  showFirst = true;
  showSecond = true;
  showThirth = true;
  mapSelectButton = false;
  
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  /* 
  onFocus 
  */
  onFocusFrom(){
    this.mapFromIcon = true;
  }
  onFocusTo(){
    this.mapToIcon = true;
  }
  /* 
  start functions to manipulate appear/desappear items when select 
  */
  onSelectFrom(){
    this.showFirst = false;
    this.mapFrom = true;
    this.mapFromIcon = false;
    this.mapSelectButton = true;
  }
  onFromLocationSelect(){
    this.showFirst = true;
    this.mapFrom = false;
    this.mapFromIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  onSelectTo(){
    this.showSecond = false;
    this.showThirth = true;
    this.mapTo = true;
    this.mapToIcon = false;
    this.mapSelectButton = true;
  }
  onToLocationSelect(){
    this.showSecond = true;
    this.mapTo = false;
    this.mapToIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  /* 
  end functions to manipulate appear/desappear items when select 
  */
 
  /* Navigate */
  //  go next step
  search(){
    this.router.navigate(['/carry-products']);
  }
  
}
