import { ProgressService } from './progress.service';
import { SampleService } from './sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataLoggerComponent } from './data-logger/data-logger.component';
import { DataMapperComponent } from './data-mapper/data-mapper.component';
import { BarComponent } from './bar/bar.component';
import { OpsComponent } from './ops/ops.component';

@NgModule({
  declarations: [
    AppComponent,
    DataLoggerComponent,
    DataMapperComponent,
    BarComponent,
    OpsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
