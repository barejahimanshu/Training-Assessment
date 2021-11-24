import { Component, OnInit } from '@angular/core';

interface State {
  countDown: number,
  timeLogs: { start: boolean,  countDown: number, time: Date}[],
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  interval;

  state: State = {
    countDown: 0,
    timeLogs: [],
  }

  constructor() { }

  ngOnInit(): void {
  }

  startPause(data: { start: boolean, value: number }) {
    if (this.state.countDown === 0) {
      this.state.countDown = data.value
    }
    this.state.timeLogs.push({
      start: data.start,
      time: new Date(),
      countDown: this.state.countDown,
    });
    if (data.start) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if (this.state.countDown === 0) {
          clearInterval(this.interval)
        } else {
          this.state.countDown -= 1;
        }
      }, 1000);
    } else {
      clearInterval(this.interval)
    }
  }

  reset() {
    clearInterval(this.interval)
    this.state = {
      countDown: 0,
      timeLogs: [],
    }
  }

}
