import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective implements OnInit {

  @HostBinding('style.height.px')
  ht = 200

  @HostBinding('style.border')
  brd = '1px solid red'

  @HostBinding('style.background')
  back = 'red'

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) { }

  ngOnInit() {
    console.log(this.elRf.nativeElement)
    // this.elRf.nativeElement.style.border = '1px solid red' // not recommended

    // this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid yellow')
    // this.rend.setStyle(this.elRf.nativeElement, 'height', `${this.ht}px`)
  }

  @HostListener('mouseenter')
  in() {
    this.back = this.randomColor()
  }

  @HostListener('mouseleave')
  out() {
    this.back = this.randomColor()
  }

  randomColor() {
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
  }
}
