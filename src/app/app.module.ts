import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BasicComponent } from './basic/basic.component';

import { FormModule } from './form/form.module';
import { BasicModule } from './basic/basic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormModule,
    BasicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
