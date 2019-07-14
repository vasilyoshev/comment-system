import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import uuid from 'uuid/v4';

import { CommentInfo } from '../interfaces/comment.interface';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() id: string;
  @Output() submitForm = new EventEmitter();

  public comment: CommentInfo;
  public types = ['Low', 'Medium', 'High'];
  public addCommentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.comment = this.commentService.getComment(this.id) || {} as CommentInfo;
    this.addCommentForm = this.fb.group({
      type: [this.comment.type, [Validators.required]],
      title: [this.comment.title, [Validators.required]]
    });
  }

  public submit(): void {
    if (this.addCommentForm.invalid) {
      return;
    }

    this.comment.date = new Date();
    this.comment.type = this.addCommentForm.value.type;
    this.comment.title = this.addCommentForm.value.title;
    this.comment.id = this.id || uuid();

    if (!this.id) {
      this.commentService.comments.push(this.comment);
      this.comment = {} as CommentInfo;
    }
    this.submitForm.emit();
  }
}
