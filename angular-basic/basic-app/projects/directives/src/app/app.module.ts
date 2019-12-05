import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MagicDirective } from './magic.directive';
import { DdMgrDirective } from './dd-mgr.directive';

@NgModule({
  declarations: [
    AppComponent,
    MagicDirective,
    DdMgrDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
