import { TfComponent } from './tf/tf.component';
import { RfComponent } from './rf/rf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'rf', component: RfComponent },
  { path: 'tf', component: TfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
