import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {
  pause: boolean = true;
  formGroup: FormGroup;
  countDown = 0;
  timeLogs = []
  interval;
  // changed = false

  constructor(private fb: FormBuilder, private service: DataSharingService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      timer: [0]
    })
    this.service.data$.subscribe(data=>{
      this.timeLogs= data.timeLogs
    })
    // this.formGroup.get('timer').valueChanges.subscribe(res => this.changed = true)
  }

  startPauseHandler() {
    this.timeLogs.push({
      start: !this.pause,
      time: new Date(),
      countDown: this.countDown,
    })
    this.pause = !this.pause;
    if (this.countDown == 0) {
      this.countDown = this.formGroup.get('timer').value
    }
    if (!this.pause) {
      this.countDown = this.countDown
      this.interval = setInterval(() => {
        if (this.countDown === 0) {
          this.pause = true
          clearInterval(this.interval)
        } else {
          this.countDown -= 1;
        }
        this.service.next({
          countDown: this.countDown,
          timeLogs: this.timeLogs
        })
      }, 1000);
    } else {
      clearInterval(this.interval)
    }
  }

  resetHandler() {
    clearInterval(this.interval)
    this.pause = true
    this.countDown = 0;
    this.formGroup.get('timer').setValue(0)
    this.service.next({
      countDown: 0,
      timeLogs: [],
    })
  }


}
