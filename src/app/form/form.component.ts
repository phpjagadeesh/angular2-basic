import { Component, OnInit } from '@angular/core';
import { FormField } from './form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public formfield: FormField; // our model

  ngOnInit() {
    this.formfield = {
      name: ''
    };
  }

  constructor() {
  }

  save(model: FormField, isValid: boolean) {
    console.log(model, isValid);	
  }

 }
