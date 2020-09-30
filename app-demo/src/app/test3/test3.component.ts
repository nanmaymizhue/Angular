import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
   <p>test3 component works!</p>
    <h2>{{"Hello "+ name}}</h2> 
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
   this.childEvent.emit('Hey zhue');
  }
}
