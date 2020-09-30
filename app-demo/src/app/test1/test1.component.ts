import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
    <p>test1 component works</p>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome to test1'">Greet</button>
    {{greeting}}
    <br><br>

    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>
  

  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }
}
