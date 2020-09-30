import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test6',
  template: `
  <p>test6 component works!</p>
   <h2>Employee List</h2>
   <ul *ngFor="let employee of employees">
     <li>{{employee.name}}</li>
   </ul>

   <h2>Employee Details</h2>
   <ul *ngFor="let employee of employees">
     <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
   </ul>
  `,
  styleUrls: ['./test6.component.css']
})
export class Test6Component implements OnInit {

  public employees=[
    {"id":1, "name": "Mg Mg", "age": 20},
    {"id":2, "name": "Bo Bo", "age": 30},
    {"id":3, "name": "Htet Htet", "age": 40}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
