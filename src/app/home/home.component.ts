import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public title:string = "Angular App";
  public author:string = "Carlos H. Somet";

  constructor() { }

  ngOnInit() {
  }

}
