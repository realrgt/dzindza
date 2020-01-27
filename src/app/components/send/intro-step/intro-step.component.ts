import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-step',
  templateUrl: './intro-step.component.html',
  styleUrls: ['./intro-step.component.scss']
})
export class IntroStepComponent implements OnInit {
  /* animate css */
  showEffect = true;
  bounceIn = "bounceIn";
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
  animated CSS 
  */
  
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
    this.mapFrom = true;
    this.mapFromIcon = false;
    this.mapSelectButton = true;
    this.showFirst = false;
  }
  onFromLocationSelect(){
    this.showFirst = true;
    this.mapFrom = false;
    this.mapFromIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  onSelectTo(){
    this.showThirth = false;
    this.mapTo = true;
    this.mapToIcon = false;
    this.mapSelectButton = true;
  }
  onToLocationSelect(){
    this.showThirth = true;
    this.mapTo = false;
    this.mapToIcon = false;
    this.mapSelectButton = false;
    this.showEffect = false;
  }
  /* 
  end functions to manipulate appear/desappear items when select 
  */
 // go next step
 goNext(){
   this.router.navigate(['/step-one']);
 }
  
}
