import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-data-logger',
  templateUrl: './data-logger.component.html',
  styleUrls: ['./data-logger.component.css'],
  // providers: [SampleService]
})
export class DataLoggerComponent implements OnInit {

  logCnt = 0
  constructor(
    private sample: SampleService
  ) { }

  ngOnInit() {
  }

  onLog() {
    this.logCnt = this.sample.cnt++
  }
}
