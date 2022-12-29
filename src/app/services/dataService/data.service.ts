import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject({type:'', data:[]});
  currentData = this.messageSource.asObservable();

  ChangeDataMessage(msg:any){
    console.log(msg);
    this.messageSource.next(msg);
  }
}
