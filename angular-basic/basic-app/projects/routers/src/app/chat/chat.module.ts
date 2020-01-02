import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { SmsComponent } from './sms/sms.component';
import { InternetComponent } from './internet/internet.component';

@NgModule({
  declarations: [ChatComponent, SmsComponent, InternetComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ChatModule { }
