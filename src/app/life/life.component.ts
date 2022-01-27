import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  startingLifeTotal:number = 20;
  a: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  minusThree() {
    this.startingLifeTotal -= 3;
  }

  minusFour() {
    this.startingLifeTotal -= 4;
  }

  minusTwo() {
    this.startingLifeTotal -= 2;
  }

  reset() {
    this.startingLifeTotal = 20;
  }

}
