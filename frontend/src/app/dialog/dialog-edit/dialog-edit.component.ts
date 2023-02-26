import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { Comment } from 'src/app/comment/comment';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css'],
})
export class DialogEditComponent {
  comment: Comment = { id: -1, name: '', text: '', pin: '' };
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialogRef: MatDialogRef<DialogEditComponent>
  ) {}

  onSubmit() {
    this.commentService
      .editComment(this.comment)
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
