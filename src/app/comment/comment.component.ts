import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CommentInfo } from '../interfaces/comment.interface';
import { CommentService } from './../services/comment.service';
import { DeleteCommentDialogComponent } from '../delete-comment-dialog/delete-comment-dialog.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: CommentInfo;
  @Input() isEditable: boolean;

  public imgSrc: string;
  public isInEditMode: boolean;

  constructor(
    private commentService: CommentService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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

  private getImgSrc(type: string): string {
    switch (type) {
      case 'Low': // TODO use the enum
        return 'assets/low.png';
      case 'Medium':
        return 'assets/medium.png';
      case 'High':
        return 'assets/high.png';
    }
  }
}
