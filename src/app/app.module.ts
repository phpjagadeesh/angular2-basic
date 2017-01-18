import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormModule } from './form/form.module';
import { BasicModule } from './basic/basic.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormModule,
    BasicModule,
    ReactiveFormModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
