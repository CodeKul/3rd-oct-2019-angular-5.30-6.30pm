import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  type = 'button'
  brd = '1px solid red'
  style = {
    border: '1px solid red',
    color: 'green'
  }
  bxBkCl = 'white'

  whatsDate() {
    return Date.now()
  }

  onMouseEnterDfkfjjlaksdfjlsajvdk(event: MouseEvent) {
    console.log(`Entered`, event)
    this.bxBkCl = this.randomColor()
  }

  onMouseLeave(event: MouseEvent) {
    console.log(`Exited`, event)
    this.bxBkCl = this.randomColor()
  }

  onBtnClk(event: MouseEvent) {
    this.title = this.title.toUpperCase()
    console.log(`Clicked`, event)
  }

  randomColor() : string{
    let red = 255 // generate random number which is less than on equal to 255
    let green = 89 // generate random number which is less than on equal to 255
    let blue = 27 // generate random number which is less than on equal to 255
    return `rgb(${red}, ${green}, ${blue})`
  }
}
