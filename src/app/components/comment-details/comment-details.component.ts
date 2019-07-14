import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CommentData } from '../../shared/interfaces/comment.interface';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit, OnDestroy {

  public comment: CommentData;

  private onDestroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params: ParamMap) => {
        this.comment = this.commentService.getComment(params.get('id'));
        if (!this.comment) {
          this.router.navigate(['']);
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
