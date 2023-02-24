import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment/comment.service';

@NgModule({
  declarations: [AppComponent, CommentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
