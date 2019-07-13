import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'comment', component: CommentDetailsComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
