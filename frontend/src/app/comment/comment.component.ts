import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  comments: Comment[] = [];
  newComment: Comment = { name: '', text: '', pin: '' };
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.commentService
      .findAll()
      .subscribe((comments) => (this.comments = comments));
  }

  async addComment(comment: Comment, form: NgForm) {
    this.commentService
      .addComment(comment)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = JSON.stringify(err.error.message);
          if (this.errorMessage.length == 0) {
            form.resetForm();
            this.errorMessage = '';
          }
          return throwError(err);
        })
      )
      .subscribe((_) => {
        form.resetForm();
        this.errorMessage = '';
      });
  }

  async onSubmit(form: NgForm) {
    await this.addComment(this.newComment, form);
  }
}
