import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog/dialog-add/dialog-add.component';
import { DialogDeleteComponent } from '../dialog/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../dialog/dialog-edit/dialog-edit.component';
import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  comments: Comment[] = [];
  newComment: Comment = { id: -1, name: '', text: '', pin: '' };
  errorMessage: string = '';

  constructor(
    private commentService: CommentService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.commentService
      .findAll()
      .subscribe((comments) => (this.comments = comments));
  }

  onAdd() {
    const dialogRef = this.dialog.open(DialogAddComponent);
    dialogRef.beforeClosed().subscribe((_) => this.loadComments());
  }

  onEdit(comment: Comment) {
    const dialogRef = this.dialog.open(DialogEditComponent);
    dialogRef.componentInstance.comment = comment;
    dialogRef.componentInstance.comment.pin = '';
    dialogRef.beforeClosed().subscribe((_) => this.loadComments());
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.beforeClosed().subscribe((_) => this.loadComments());
  }
}
