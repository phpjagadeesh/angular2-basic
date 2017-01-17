import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  user: FormGroup;
  
  constructor() { 
  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.minLength(10),Validators.required]),
      secondName: new FormControl('')
    });  
  }

  save() {
    console.log('TEXT');    
  }

}
