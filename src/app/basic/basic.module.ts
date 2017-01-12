import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasicComponent } from './basic.component';

@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BasicComponent
  ]
})

export class BasicModule {

}
