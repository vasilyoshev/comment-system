import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CommentData } from '../../shared/interfaces/comment.interface';
import { CommentService } from '../../services/comment.service';
import { DeleteCommentDialogComponent } from './delete-comment-dialog/delete-comment-dialog.component';
import { CommentTypesEnum } from '../../../app/shared/enums/comment-types.enum';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: CommentData;
  @Input() isEditable: boolean;

  public imgSrc: string;
  public isInEditMode: boolean;

  constructor(
    private commentService: CommentService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initProps();
  }

  public deleteComment(): void {
    const dialogRef = this.dialog.open(DeleteCommentDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.commentService.deleteComment(this.comment.id);
        this.router.navigate(['']);
      }
    });
  }

  public initProps(): void {
    this.isInEditMode = false;
    this.imgSrc = this.getImgSrc(this.comment.type);
  }

  private getImgSrc(type: CommentTypesEnum): string {
    switch (type) {
      case CommentTypesEnum.Low:
        return 'assets/low.png';
      case CommentTypesEnum.Medium:
        return 'assets/medium.png';
      case CommentTypesEnum.High:
        return 'assets/high.png';
      default:
        return undefined;
    }
  }
}
