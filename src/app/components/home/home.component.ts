import { Component } from '@angular/core';

import { CommentData } from '../../shared/interfaces/comment.interface';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public comments: Array<CommentData>;

  constructor(private commentService: CommentService) {
    this.comments = this.commentService.comments;
  }
}
