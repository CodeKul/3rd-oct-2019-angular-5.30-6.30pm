import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';

  isVs = false

  dt() {
    this.title = new Date().toString()
  }

  hi() {

  }
}
