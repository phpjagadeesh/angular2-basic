import { Component, OnInit } from '@angular/core';
import { User } from './reactive-form.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  //user: FormGroup;
  user: any;

  constructor() { 
  }

  ngOnInit() {
    this.user = new FormGroup({
     // name: new FormControl('')
    });  
  }

}
