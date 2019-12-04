import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective implements OnInit {

  constructor(
    private elRf: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.elRf)
  }
}
