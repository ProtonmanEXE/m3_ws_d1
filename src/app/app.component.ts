import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startingLifeTotal: number;

  constructor() {
    this.startingLifeTotal = 20;
  }

}
