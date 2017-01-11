import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  animals: string[];
  
  constructor() {
    this.animals = ['cat', 'dog', 'rat'];
  }
}
