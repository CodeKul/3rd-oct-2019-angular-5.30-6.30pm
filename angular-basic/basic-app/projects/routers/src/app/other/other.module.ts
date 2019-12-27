import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class OtherModule { }
