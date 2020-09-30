import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test9',
  templateUrl: './test9.component.html',
  styleUrls: ['./test9.component.css']
})
export class Test9Component implements OnInit {

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
   "text-success": !this.hasError,
   "text-danger": this.hasError,
   "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }


  constructor() { }

  ngOnInit(): void {
  }

  
}
