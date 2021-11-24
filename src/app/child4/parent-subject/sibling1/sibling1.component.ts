import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';

interface State {
  countDown: number,
  // timeLogs: { start: boolean,  countDown: number, time: Date}[],
}

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  countDown = 0;

  constructor(private service: DataSharingService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(res => this.countDown = res.countDown)
  }

}
