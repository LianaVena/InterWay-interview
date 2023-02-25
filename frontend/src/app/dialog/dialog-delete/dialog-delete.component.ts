import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
})
export class DialogDeleteComponent {
  id: number = -1;
  pin: string = '';
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialogRef: MatDialogRef<DialogDeleteComponent>
  ) {}

  onSubmit() {
    this.commentService
      .deleteComment(this.id, this.pin)
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
