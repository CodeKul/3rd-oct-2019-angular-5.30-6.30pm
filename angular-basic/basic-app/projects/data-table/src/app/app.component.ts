import { Component } from '@angular/core';
import { TabRow } from './data-domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-table';

  data = new Array<TabRow>()

  fetchData() {
    // it fetches the data for server
    this.data.push({ id: 1, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 2, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 3, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 4, item: 'pc', qty: 3, price: 30000 })
  }

  akdjfjhaldflsaudfh(row: TabRow) {
    console.log(`Delete Clicked`, row)
  }
}
