import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-math-ops',
  templateUrl: './math-ops.component.html',
  styleUrls: ['./math-ops.component.css']
})
export class MathOpsComponent implements OnInit {

  @ContentChild('alt', { static: true })
  alt: ElementRef

  constructor() { }

  ngOnInit() {
    console.log(this.alt)
  }
}
