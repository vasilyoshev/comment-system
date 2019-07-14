import { Injectable } from '@angular/core';

import { CommentInfo } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public comments: Array<CommentInfo>;

  constructor() {
    this.comments = [];
  }

  public getComment(id: string): CommentInfo {
    return this.comments.find((comment: CommentInfo) => comment.id === id);
  }

  public addComment(comment: CommentInfo): void {
    if (!this.getComment(comment.id)) {
      this.comments.push(comment);
    }
    this.comments.sort((a: CommentInfo, b: CommentInfo) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
  }

  public deleteComment(id: string): void {
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].id === id) {
        this.comments.splice(i, 1);
        return;
      }
    }
  }
}
