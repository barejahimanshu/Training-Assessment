import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
@Component({
  selector: 'app-subject4',
  templateUrl: './subject4.component.html',
  styleUrls: ['./subject4.component.css']
})
export class Subject4Component implements OnInit {
timeLogs= []
  constructor(private service: DataSharingService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(data=>{
      console.log(data)
      this.timeLogs = data.timeLogs
  })
}

  countStart() {
    return this.timeLogs.reduce((acc, curr) => {
      if (curr.start) {
        return acc + 1
      }
      return acc
    }, 0)
  }
}


