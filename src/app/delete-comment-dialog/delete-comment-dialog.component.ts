import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-comment-dialog',
  templateUrl: './delete-comment-dialog.component.html',
  styleUrls: ['./delete-comment-dialog.component.scss']
})
export class DeleteCommentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // TODO remove any

  ) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
