import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { DeleteCommentDialogComponent } from './delete-comment-dialog/delete-comment-dialog.component';

const materialModuleImports = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CommentDetailsComponent,
    CommentComponent,
    AddCommentComponent,
    DeleteCommentDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModuleImports,
  ],
  providers: [],
  entryComponents: [
    DeleteCommentDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
