import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {

  clientList: string[] = ['Charlie Manson', 'Doe Jack', 'John Doe', 'Jane Doe'];

  active: boolean = true;

  constructor() { }

  setActive(): void {

    this.active = (this.active == true) ? this.active = false : true;

  }

}
