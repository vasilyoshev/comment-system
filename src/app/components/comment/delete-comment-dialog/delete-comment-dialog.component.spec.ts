import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCommentDialogComponent } from './delete-comment-dialog.component';

describe('DeleteCommentDialogComponent', () => {
  let component: DeleteCommentDialogComponent;
  let fixture: ComponentFixture<DeleteCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCommentDialogComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => { } } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onNoClick()', () => {
    it('should close dialogRef on cancel', () => {
      // Given
      const dialogCloseSpy = spyOn(component['dialogRef'], 'close');

      // When
      component.onNoClick();

      // Then
      expect(dialogCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});
