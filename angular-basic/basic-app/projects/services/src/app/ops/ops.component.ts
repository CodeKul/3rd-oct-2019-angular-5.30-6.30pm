import { ProgressService } from './../progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ops',
  templateUrl: './ops.component.html',
  styleUrls: ['./ops.component.css']
})
export class OpsComponent implements OnInit {

  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() {
  }

  onProgress(btn: number) {
    this.progressService.em.emit({ progress: btn })
  }
}
