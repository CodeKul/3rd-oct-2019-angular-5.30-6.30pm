import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective implements OnInit {

  constructor(
    private elRf: ElementRef,
    private rend : Renderer2 
  ) { }

  ngOnInit() {
    console.log(this.elRf.nativeElement)
    // this.elRf.nativeElement.style.border = '1px solid red' // not recommended

    this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid yellow')
  }
}
