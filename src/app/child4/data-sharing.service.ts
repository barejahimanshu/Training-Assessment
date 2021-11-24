import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface State {
  countDown: number,
  timeLogs: { start: boolean,  countDown: number, time: Date}[],
}

// interface State {
//   start: boolean,
//   value: number,
// }

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  data: BehaviorSubject<State> = new BehaviorSubject<State>({
    countDown: 0,
    timeLogs: [],
  });
  data$= this.data.asObservable()

  constructor() { }
  
  next(value){
    this.data.next(value)
  }
}
