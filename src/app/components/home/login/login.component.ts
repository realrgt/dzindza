import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
    // this.name = 'RGT';
  }

}
