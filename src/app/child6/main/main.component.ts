import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arr = [1]

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    console.log("load more...")
    for (let i = 0; i < 4; i++) {
      this.arr.push(this.arr.length + 1)
    }
  }

  clickHandler(val) {
    alert(val)
  }

}
