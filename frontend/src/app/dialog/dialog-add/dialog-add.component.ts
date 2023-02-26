import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { Comment } from '../../comment/comment';
import { CommentService } from '../../comment/comment.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css'],
})
export class DialogAddComponent {
  comment: Comment = { id: -1, name: '', text: '', pin: '' };
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialogRef: MatDialogRef<DialogAddComponent>
  ) {}

  onSubmit() {
    this.commentService
      .addComment(this.comment)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = JSON.stringify(err.error.message);
          return throwError(err);
        })
      )
      .subscribe((_) => {
        this.dialogRef.close();
      });
  }
}
