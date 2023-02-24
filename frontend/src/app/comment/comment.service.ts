import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentUrl: string;

  constructor(private http: HttpClient) {
    this.commentUrl = 'http://localhost:8080/comment';
  }

  public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + '/all');
  }

  public addComment(comment: Comment): Observable<any> {
    return this.http.post<Comment>(
      this.commentUrl + '/add',
      JSON.stringify(comment),
      { headers: { 'content-type': 'application/json' } }
    );
  }
}
