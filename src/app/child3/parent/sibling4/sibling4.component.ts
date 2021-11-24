import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling4',
  templateUrl: './sibling4.component.html',
  styleUrls: ['./sibling4.component.css']
})
export class Sibling4Component implements OnInit {

  @Input() state;

  constructor() { }

  ngOnInit(): void {
  }

  countStart() {
    return this.state.timeLogs.reduce((acc, curr) => {
      if (curr.start) {
        return acc + 1
      }
      return acc
    }, 0)
  }

}
