import { Component } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService
      .findAll()
      .subscribe((comments) => (this.comments = comments));
  }
}
