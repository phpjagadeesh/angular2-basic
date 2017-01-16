import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component'; 

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormControl,
    FormGroup
  ],
  exports: [
    ReactiveFormComponent
  ]
})

export class ReactiveForm {

}
