import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-comment-dialog',
  templateUrl: './delete-comment-dialog.component.html',
  styleUrls: ['./delete-comment-dialog.component.scss']
})
export class DeleteCommentDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteCommentDialogComponent>) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
