import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { of } from 'rxjs';

import { CommentComponent } from './comment.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentData } from '../../shared/interfaces/comment.interface';
import { CommentTypesEnum } from '../../shared/enums/comment-types.enum';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentComponent,
        CommentFormComponent
      ],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = {} as CommentData;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteComment()', () => {
    it('should delete comment and reroute on dialog confirm', () => {
      // Given
      const dialogOpenSpy = spyOn(component['dialog'], 'open').and.returnValue({ afterClosed: () => { return of(true) } } as any);
      const deleteCommentSpy = spyOn(component['commentService'], 'deleteComment');
      const navigateSpy = spyOn(component['router'], 'navigate');

      // When
      component.deleteComment();

      // Then
      expect(dialogOpenSpy).toHaveBeenCalled();
      expect(deleteCommentSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalled();
    });

    it('should NOT delete comment and reroute on dialog cancel', () => {
      // Given
      const dialogOpenSpy = spyOn(component['dialog'], 'open').and.returnValue({ afterClosed: () => { return of(false) } } as any);
      const deleteCommentSpy = spyOn(component['commentService'], 'deleteComment');
      const navigateSpy = spyOn(component['router'], 'navigate');

      // When
      component.deleteComment();

      // Then
      expect(dialogOpenSpy).toHaveBeenCalled();
      expect(deleteCommentSpy).toHaveBeenCalledTimes(0);
      expect(navigateSpy).toHaveBeenCalledTimes(0);
    });
  });

  describe('initProps()', () => {
    it('should successfully enable edit mode', () => {
      // Given
      component.isInEditMode = true;

      // When
      component.initProps();

      // Then
      expect(component.isInEditMode).toBeFalsy();
    });

    it('should set correct src for low type', () => {
      // Given
      component.comment.type = CommentTypesEnum.Low;

      // When
      component.initProps();

      // Then
      expect(component.imgSrc).toEqual('assets/low.png');
    });

    it('should set correct src for medium type', () => {
      // Given
      component.comment.type = CommentTypesEnum.Medium;

      // When
      component.initProps();

      // Then
      expect(component.imgSrc).toEqual('assets/medium.png');
    });

    it('should set correct src for high type', () => {
      // Given
      component.comment.type = CommentTypesEnum.High;

      // When
      component.initProps();

      // Then
      expect(component.imgSrc).toEqual('assets/high.png');
    });

    it('should set correct src for invalid type', () => {
      // Given
      component.comment.type = undefined;

      // When
      component.initProps();

      // Then
      expect(component.imgSrc).toEqual(undefined);
    });
  });
});
