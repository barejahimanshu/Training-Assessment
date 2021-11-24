import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  initialList = [
    {
      id: 1,
      Name: "mmmm",
      Class: "12",
      Section: "B",
      Subject1: 100,
      Subject2: 100,
      Subject3: 100
    },
    {
      id: 2,
      Name: "Himanshu",
      Class: "10",
      Section: "A",
      Subject1: 23,
      Subject2: 43,
      Subject3: 32
    },
    {
      id: 3,
      Name: "Kalpak",
      Class: "10",
      Section: "A",
      Subject1: 33,
      Subject2: 53,
      Subject3: 72
    },
    {
      id: 4,
      Name: "zzz",
      Class: "12",
      Section: "B",
      Subject1: 100,
      Subject2: 100,
      Subject3: 100
    },
  ];

  constructor() { }

  getData(){
    return this.initialList
    // if we want data from API
    
  }
}
