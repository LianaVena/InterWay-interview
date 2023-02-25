import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { Comment } from '../../comment/comment';
import { CommentService } from '../../comment/comment.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-add-comment.component.html',
  styleUrls: ['./dialog-add-comment.component.css'],
})
export class DialogAddCommentComponent {
  newComment: Comment = { id: -1, name: '', text: '', pin: '' };
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialogRef: MatDialogRef<DialogAddCommentComponent>
  ) {}

  addComment(comment: Comment, form: NgForm) {
    this.commentService
      .addComment(comment)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = JSON.stringify(err.error.message);
          if (this.errorMessage.length == 0) {
            form.resetForm();
          }
          return throwError(err);
        })
      )
      .subscribe((_) => {
        form.resetForm();
        this.errorMessage = '';
        this.dialogRef.close();
      });
  }

  onSubmit(form: NgForm) {
    this.addComment(this.newComment, form);
  }
}
