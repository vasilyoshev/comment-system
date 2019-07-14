import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import uuid from 'uuid/v4';

import { CommentData } from '../../shared/interfaces/comment.interface';
import { CommentService } from '../../services/comment.service';
import { CommentTypesEnum } from '../../../app/shared/enums/comment-types.enum';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() id: string;
  @Output() submitForm = new EventEmitter();

  public comment: CommentData;
  public types: Array<CommentTypesEnum>;
  public addCommentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) {
    this.types = [
      CommentTypesEnum.Low,
      CommentTypesEnum.Medium,
      CommentTypesEnum.High
    ];
  }

  ngOnInit(): void {
    this.comment = this.commentService.getComment(this.id) || {} as CommentData;
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
    this.commentService.addComment(this.comment);

    this.comment = {} as CommentData;
    this.submitForm.emit();
  }
}
