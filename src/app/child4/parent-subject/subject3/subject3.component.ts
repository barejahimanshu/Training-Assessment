import { Component, OnInit } from '@angular/core';
// import { DataSharingService } from 'src1/app/child4/data-sharing.service';
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component implements OnInit {
  timeLogs=[]

  constructor(private service: DataSharingService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(data=>{
        console.log(data)
        this.timeLogs = data.timeLogs
    })
  }
}
