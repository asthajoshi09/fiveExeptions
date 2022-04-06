import { Component, OnInit } from '@angular/core';
import { dataObj } from '../datalist';

@Component({
  selector: 'app-showdatalist',
  templateUrl: './showdatalist.component.html',
  styleUrls: ['./showdatalist.component.css']
})
export class ShowdatalistComponent implements OnInit {
  dataList: dataObj[];
  constructor() {
    this.dataList = [];
  }

  ngOnInit(): void {
    const allData = localStorage.getItem('dataList');
    if (allData !== null) {
      this.dataList = JSON.parse(allData);
    }
    console.log(this.dataList)

  }

}
