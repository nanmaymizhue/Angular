import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <p>test4 component works!</p>
    <input [(ngModel)]="name" type="text">
    {{name}}


    <h2 *ngIf="displayName; then thenBlock; else elseBlock">
      Codevolution
    </h2>
    <ng-template #thenBlock>
      <h2>Name:Codevolution</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>


    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
  `,
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  public name = "";

  public displayName = true;

  public color = "yellow";

  constructor() { }

  ngOnInit(): void {
  }

}
