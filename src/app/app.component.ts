import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  animals: string[];
  count: number;

  constructor() {
    this.animals = ['cat', 'dog', 'rat'];
    this.count = 1;
  }

  increment() {
    this.count += 1;
  }
}
