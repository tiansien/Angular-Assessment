import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  dataList = [
    { id: 1, name: 'John Doe', age: 20, income: 1000 },
    { id: 2, name: 'James Foo', age: 25, income: 3500 },
    { id: 3, name: 'Alice Green', age: 30, income: 5000 },
    { id: 4, name: 'Bob Smith', age: 19, income: 1200 },
  ];

  filteredDataList = [...this.dataList];

  applyCreditCard(id: number) {
    alert(`✅ Credit card application submitted for ID: ${id}`);
  }

  filterData(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredDataList = searchTerm
      ? this.dataList.filter((item) =>
          item.name.toLowerCase().includes(searchTerm)
        )
      : [...this.dataList];
  }
}
