import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

'use strict';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreatShopping';
  constructor(private router: Router, private route: ActivatedRoute) { }
  setdata(data:string) {
    sessionStorage.setItem('userSession',JSON.stringify(data))
  }
  getdata() {
    return JSON.parse.caller(sessionStorage.getItem('userSession'))
  }
  removedata() {
    sessionStorage.removeItem('userSession');
  }
}
