import { Component, SimpleChanges, Input } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lyf',
  templateUrl: './lyf.component.html',
  styleUrls: ['./lyf.component.css']
})
export class LyfComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  dt : string

  constructor() { 
    console.log(`constructor`)
  }

  ngOnChanges(ch : SimpleChanges) {
    console.log(`ngOnChanges`)
    console.log(ch)
  }

  ngOnInit() {
    console.log(`ngOnInit`);
  }

  ngDoCheck() {
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }
}
