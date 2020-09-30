import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {

  public number=10;
  constructor() { }

  ngOnInit(): void {
  }

  increaseValue(){
    this.number++;
  }
}
