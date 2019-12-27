import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { OtherComponent } from './other/other.component';


const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', component: OtherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
