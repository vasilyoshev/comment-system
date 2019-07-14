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

  getComment(id: string): CommentInfo {
    return this.comments.find((comment: CommentInfo) => comment.id === id);
  }

  deleteComment(id: string): void {
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].id === id) {
        this.comments.splice(i, 1);
        return;
      }
    }
  }
}
