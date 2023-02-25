import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment/comment.service';
import { DialogAddCommentComponent } from './dialog/dialog-add-comment/dialog-add-comment.component';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    DialogAddCommentComponent,
    DialogDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
