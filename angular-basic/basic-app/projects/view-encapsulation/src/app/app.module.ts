import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAltComponent } from './my-alt.component';
import { MyJmbComponent } from './my-jmb/my-jmb.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAltComponent,
    MyJmbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
