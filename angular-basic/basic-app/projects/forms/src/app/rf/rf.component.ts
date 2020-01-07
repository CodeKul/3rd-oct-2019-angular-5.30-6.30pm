import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    let emlComp = Validators.compose([Validators.required, Validators.email])
    this.fg = this.fb.group({
      email: this.fb.control('', emlComp),
      password: this.fb.control('', Validators.required),
      mobile: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required)
    })
    console.log(this.fg)
  }

  onSub() {
    console.log(this.fg)
  }

  validateControl(name : string, validation : string) {
    return this.fg.get(name).getError(validation)
  }
}
