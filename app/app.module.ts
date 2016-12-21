import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {NgbDropdown, NgbDropdownToggle} from './dropdown';


@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations:	[
  	AppComponent,
	NgbDropdown,
  	NgbDropdownToggle
  ],
  providers:[],
  bootstrap:	[AppComponent]
})
export class AppModule { }
