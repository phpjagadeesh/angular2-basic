import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    FormComponent
  ]
})

export class FormModule {

}
