import { Observable, Subscriber, Observer, interval, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent {

  tk: number
  fg: FormGroup
  intSub: Subscription

  mobiles = [
    '9762548833', '9607352625', '9863524175'
  ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    console.log('Initsss')
    const obs: Observer<number> = {
      next: tk => this.tk = tk,
      error: e => console.log(e),
      complete: () => console.log(`Completed`)
    }

    this.intSub = interval(2000).subscribe(
      obs
      // tk => console.log(tk),
      // err => console.log(err),
      // () => console.log(`Execution Completeds`)
    )

    let emlComp = Validators.compose([
      Validators.required,
      Validators.email,
      this.startFromA
    ])

    this.fg = this.fb.group({
      email: this.fb.control('', emlComp),
      password: this.fb.control('', Validators.required),
      mobile: this.fb.control('', Validators.required, this.asyncValidator),
      address: this.fb.control('', Validators.required)
    })
    console.log(this.fg)
  }

  onSub() {
    console.log(this.fg)
  }

  validateControl(name: string, validation: string) {
    return this.fg.get(name).getError(validation)
  }

  startFromA(ctrl: AbstractControl): ValidationErrors | null {
    return ((ctrl.value.charAt(0) === 'a') || (ctrl.value.charAt(0) === 'A')) ? null : { isNotA: true }
  }

  asyncVali(): Observable<number> {
    return Observable.create((obs: Observer<number>) => {
      console.log(obs)
      for (let i = 0; i < 1000; i++) {
        obs.next(i)
        if (i === (i / 3)) obs.error(new Error('Reached 3'))
      }
      obs.complete()
    })
  }

  asyncValidator(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    console.log(this)
    return Observable.create((obs: Observer<ValidationErrors | null>) => {
      if (this.mobiles.findIndex(ctrl.value)) obs.next(null)
      else obs.next({ isTaken: true })
      obs.complete()
    })
  }

  myObs(): Observable<number> {
    return Observable.create((obs: Observer<number>) => {
      // setTimeout(  )
    })
  }

  ngOnDestroy() {
    console.log(`Observable Destroyed`)
    this.intSub.unsubscribe()
  }
}
