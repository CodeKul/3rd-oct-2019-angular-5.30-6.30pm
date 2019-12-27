import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashModule { }
