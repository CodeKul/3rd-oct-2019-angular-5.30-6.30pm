import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isPara = false

  mobs = [
    'Android', 'Apple', 'Moto', 'BB'
  ]

  bsOb = { 'border' : '1px solid red', 'color' : 'red' }

  isAl = false
  onOkay() {

    this.isPara = !this.isPara
    /*
    THIS IS HOW KIDS DO
    if(this.isPara == false) {
      this.isPara = true
    }
    else {
      this.isPara = false
    }*/
  }

  // onClassIt() {
  //   this.isAl = !this.isAl
  // }
}
