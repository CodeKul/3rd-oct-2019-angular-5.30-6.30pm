import { ProgressService, ProgressData, ProgressBar } from './../progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  progress: number = 10
  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() {
    this.progressService.em.subscribe((prgEv: ProgressData) => {
      if (prgEv.progress == ProgressBar.NEGATIVE) {
        this.progress -= 2
      } else if (prgEv.progress == ProgressBar.POSITIVE) {
        this.progress += 2
      }
    })
  }
}
