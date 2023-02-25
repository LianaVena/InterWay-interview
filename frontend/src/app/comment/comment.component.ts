import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCommentComponent } from '../dialog/dialog-add-comment/dialog-add-comment.component';
import { DialogDeleteComponent } from '../dialog/dialog-delete/dialog-delete.component';
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddCommentComponent);
    dialogRef.beforeClosed().subscribe((_) => this.loadComments());
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.beforeClosed().subscribe((_) => this.loadComments());
  }
}
