import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {

  myFrm: NgForm

  edtObj = {
    pass : 'hi',
    email : 'ani@gmail.com',
    mob : '434876587356',
    add : 'dslgljslfjglsjk'
  }

  constructor() { }

  ngOnInit() {

  }

  mySub(frm: NgForm) {
    console.log(frm.value)

    console.log(this.edtObj)
  }
}
