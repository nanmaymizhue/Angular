import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <p>test2 component works!</p>
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public colors =["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
