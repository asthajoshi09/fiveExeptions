import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dataObj } from '../datalist';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  myForm!: FormGroup;
  //dataObj: dataObj = new dataObj();
  tempObj: dataObj;
  toastr: any;


  constructor() {
    this.tempObj = new dataObj();
    //this.dataList = [];
  }

  ngOnInit(): void {
    this.createFormFields();
  }

  createFormFields() {
    this.myForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      quantity: new FormControl(null),
      price: new FormControl(null),
      date: new FormControl(null)
    });
  }

  getId() {
    const allData = localStorage.getItem('dataList')
    if (allData !== null) {
      const dataList = JSON.parse(allData);
      return dataList.length + 1;

    } else {
      return 1;
    }
  }

  saveData() {
    const newId = this.getId()
    this.tempObj.id = newId;
    const allData = localStorage.getItem('dataList');
    if (allData !== null) {
      const dataList = JSON.parse(allData);
      dataList.push(this.tempObj);
      localStorage.setItem('dataList', JSON.stringify(dataList));
      alert('Data Submitted')
    }
    else {
      const dataArray = [];
      dataArray.push(this.tempObj);
      console.log(this.tempObj)
      localStorage.setItem('dataList', JSON.stringify(dataArray));
      alert('Data Submitted')
    }

  }
  deleteRow(index: number) {
    if (this.groups.length == 1) {
      this.toastr.error("Can't delete the row when there is only one row", 'Warning');
      return false;
    } else {
      this.groups.splice(index, 1);
      this.toastr.warning('Row deleted successfully', 'Delete row');
      return true;
    }
  }

  addItem(index: number) {
    var currentElement = this.groups[index];
    this.groups.splice(index, 0, currentElement);
    console.log(index)
  }

  groups = [
    {

    },

  ];

}
