import { Component, OnInit, Input } from '@angular/core';

import { CommentInfo } from '../interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: CommentInfo;
  @Input() isEditable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
