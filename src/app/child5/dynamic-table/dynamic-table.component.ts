import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../tabledata.service';
// import { appSort } from '../../directive/sort.directive'

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  // initialList = [
  //   {
  //     id: 1,
  //     Name: "mmmm",
  //     Class: "12",
  //     Section: "B",
  //     Subject1: 100,
  //     Subject2: 100,
  //     Subject3: 100
  //   },
  //   {
  //     id: 2,
  //     Name: "Himanshu",
  //     Class: "10",
  //     Section: "A",
  //     Subject1: 23,
  //     Subject2: 43,
  //     Subject3: 32
  //   },
  //   {
  //     id: 3,
  //     Name: "Kalpak",
  //     Class: "10",
  //     Section: "A",
  //     Subject1: 33,
  //     Subject2: 53,
  //     Subject3: 72
  //   },
  //   {
  //     id: 4,
  //     Name: "zzz",
  //     Class: "12",
  //     Section: "B",
  //     Subject1: 100,
  //     Subject2: 100,
  //     Subject3: 100
  //   },
  // ];
  initialList = []
  dataList = []
  headings = [];

  count = 0
  constructor(private service:TabledataService) { }

  ngOnInit(): void {
    this.initialList= this.service.getData()
    this.dataList = this.initialList.map(ele => ({ ...ele }))
    this.headings = Object.keys(this.dataList[0])
    this.headings.shift()
  }



}
