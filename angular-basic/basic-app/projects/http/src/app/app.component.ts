import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { WebCl } from './web-cl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';

  users: Array<DataObj>

  constructor(
    private webCl: WebCl
  ) {

  }

  fetchUsers() {
    this.webCl.users().subscribe(res => this.users = res.data)
  }
 
}

export interface DataObj {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface ResObj {
  page: number,
  per_page: number,
  total: number,
  total_pages: number
  data: Array<DataObj>
}
