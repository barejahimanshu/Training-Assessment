import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  @Input() state;
  @Output() startPause = new EventEmitter()
  @Output() reset = new EventEmitter();

  pause: boolean = true;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      timer: [0]
    })
  }

  startPauseHandler() {
    
    if (!this.pause && this.state.countDown === 0) {
      this.pause = false
      this.startPause.emit({
        start: true,
        value: this.formGroup.get('timer').value
      })
    } else {
      this.pause = !this.pause
      this.startPause.emit({
        start: !this.pause,
        value: this.formGroup.get('timer').value
      })
    }
  }

  resetHandler() {
    this.pause = true
    this.formGroup.get('timer').setValue(0)
    this.reset.emit();
  }

}
