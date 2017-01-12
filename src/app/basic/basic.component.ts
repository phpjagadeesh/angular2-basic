import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  animals: string[];
  count: number;

  constructor() {
    this.animals = ['cat', 'dog', 'rat'];
    this.count = 1;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
