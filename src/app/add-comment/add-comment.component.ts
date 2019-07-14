import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import uuid from 'uuid/v4';

import { CommentInfo } from '../interfaces/comment.interface';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public types = ['Low', 'Medium', 'High'];
  public addCommentForm: FormGroup;

  constructor(
    private commentService: CommentService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]]
    });
  }

  public submit(): void {
    if (this.addCommentForm.invalid) {
      return;
    }

    let comment = {} as CommentInfo;
    comment.date = new Date();
    comment.type = this.addCommentForm.value.type;
    comment.title = this.addCommentForm.value.title;
    comment.id = uuid();

    this.commentService.comments.push(comment);
  }
}
