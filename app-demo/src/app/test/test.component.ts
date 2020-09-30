import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p>test component work!</p>
  <h3>Hello {{name}}</h3>
  <h4>{{2+2}}</h4>
  <h4>{{name.length}}</h4>
  <h4>{{name.toUpperCase()}}</h4>
  <h4>{{greetUser()}}</h4>
  <h4>{{siteUrl}}</h4>
  `,
  styles: [`
       h3{color:blue},

  `]
})
export class TestComponent implements OnInit {

  public name = 'Vishwas';
  public siteUrl = window.location.href;

  constructor() { }
 
  ngOnInit(): void {
  }

  greetUser(){
    return "Hi " + this.name;
  }
}
