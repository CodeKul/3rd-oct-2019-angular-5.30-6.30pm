import { ProGuard } from './pro.guard';
import { InternetComponent } from './chat/internet/internet.component';
import { SmsComponent } from './chat/sms/sms.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { OtherComponent } from './other/other.component';

const chatRoutes: Routes = [
  { path: 'sms', component: SmsComponent },
  { path: 'internet', component: InternetComponent }
]

const routes: Routes = [
  { path: 'dash', component: DashComponent, canActivate: [ProGuard] },
  { path: 'chat/:usNm', component: ChatComponent, children: chatRoutes },
  { path: '**', component: OtherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
