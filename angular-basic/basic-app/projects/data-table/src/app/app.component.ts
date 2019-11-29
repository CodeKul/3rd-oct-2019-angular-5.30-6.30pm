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
  clickedRow: TabRow

  fetchData() {
    // it fetches the data for server
    this.data.push({ id: 1, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 2, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 3, item: 'pc', qty: 3, price: 30000 })
    this.data.push({ id: 4, item: 'pc', qty: 3, price: 30000 })
  }

  akdjfjhaldflsaudfh(row: TabRow) {
    this.clickedRow = row
    console.log(`Delete Clicked`, row)
    this.data.forEach((dt, ind) => {
      if (dt.id === row.id) {
        this.data.splice(ind, 1)
      }
    })
  }
}
