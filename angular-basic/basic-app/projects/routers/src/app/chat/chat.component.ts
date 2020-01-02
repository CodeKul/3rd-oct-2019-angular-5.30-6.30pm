import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  usNm: string
  data: string
  constructor(
    private actRt: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(prm => {
      console.log(prm)
      this.usNm = prm['usNm']
    })

    this.actRt.queryParams.subscribe(prm => {
      console.log(prm)
      this.data = prm['data']
    })
  }

  onType(ty: number) {
    if (ty == 1) {
      this.router.navigate(['sms'], { relativeTo: this.actRt })
    } else {
      this.router.navigate(['internet'], { relativeTo: this.actRt })
    }
  }
}
