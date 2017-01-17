import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component'; 

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ReactiveFormModule {

}
