import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CommentInfo } from '../../shared/interfaces/comment.interface';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit, OnDestroy {

  public comment: CommentInfo;

  private onDestroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params: ParamMap) => {
        this.comment = this.commentService.getComment(params.get('id'));
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
