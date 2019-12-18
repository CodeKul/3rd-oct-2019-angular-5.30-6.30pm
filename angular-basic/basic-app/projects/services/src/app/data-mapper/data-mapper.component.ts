import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-data-mapper',
  templateUrl: './data-mapper.component.html',
  styleUrls: ['./data-mapper.component.css'],
  // providers: [SampleService]
})
export class DataMapperComponent implements OnInit {

  mapCnt = 0

  constructor(
    private sample: SampleService
  ) { }

  ngOnInit() {
  }

  onMap() {
    this.mapCnt = this.sample.cnt++
  }
}

// let se = new SampleService()

// let dmc = new DataMapperComponent(se)