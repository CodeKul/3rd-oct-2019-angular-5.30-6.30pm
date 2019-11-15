import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-alt',
  template: `
    <p class="alert alert-info">
      my-alt works!
    </p>
  `,
  styles: []
})
export class MyAltComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
