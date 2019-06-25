import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AlgumaCoisaComponent } from './alguma-coisa/alguma-coisa.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgumaCoisaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
