import { Component } from '@angular/core';

import { CommentInfo } from './../../interfaces/comment.interface';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public comments: Array<CommentInfo>;

  constructor(private commentService: CommentService) {
    this.comments = this.commentService.comments;
  }
}
