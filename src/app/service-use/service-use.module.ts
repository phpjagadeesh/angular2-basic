import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ServiceUseComponent } from './service-use.component';


@NgModule({
  declarations: [
    ServiceUseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ServiceUseComponent
  ]
})

export class ServiceUseModule {

}
