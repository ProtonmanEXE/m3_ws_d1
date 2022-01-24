import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  startingLifeTotal: number;
  a: number | undefined;

  constructor() {
    this.startingLifeTotal = 20;
  }

  // minusThree(): number {
  //   this.startingLifeTotal = this.startingLifeTotal - 3;
  //   return this.startingLifeTotal
  // }

  ngOnInit(): void {
  }

}
