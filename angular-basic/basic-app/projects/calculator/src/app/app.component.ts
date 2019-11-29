import { VGA } from './../../../../../../ts/com-dep';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  @ViewChild('calcStr', { static: false })
  calcStr: ElementRef

  @ViewChild('result', { static: false })
  result: ElementRef

  @ViewChild('alt', { static: false })
  alt: ElementRef

  @ViewChild('brd', { static: false })
  brd : ElementRef

  //https://mdbootstrap.com/snippets/jquery/ascensus/456902 -- UI 

  /**
   * Requirement
   * - Designing the single component for tomorrow
   * - functioning of calc like eq 74+89-50+30
   * - Num pads need to be activated
   * 
   * 
   */

   constructor() {
     
   }

  calculate() {
    console.log(this.calcStr.nativeElement.value)
    this.result.nativeElement.value = eval(this.calcStr.nativeElement.value)
  }

  cls() {
    this.calcStr.nativeElement.value = ''
    this.result.nativeElement.value = ''
    console.log(this.alt)

    // this.brd.nativeElement.style.border = '1px solid red' //not recommendeds
  }
}
