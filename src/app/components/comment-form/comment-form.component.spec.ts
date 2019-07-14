import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroupDirective, FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommentFormComponent } from './comment-form.component';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentFormComponent
      ],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should set comment and form', () => {
      // Given
      const getCommentSpy = spyOn(component['commentService'], 'getComment').and.callThrough();
      const fbGroupSpy = spyOn(component['fb'], 'group').and.callThrough();

      // When
      component.ngOnInit()

      // Then
      expect(component.comment).toBeDefined();
      expect(component.addCommentForm).toBeDefined();
    });
  });

  describe('submit()', () => {
    let addCommentSpy;
    let formResetSpy;

    beforeEach(() => {
      addCommentSpy = spyOn(component['commentService'], 'addComment');
      formResetSpy = spyOn(component['addCommentForm'], 'reset');
    });

    it('should add comment if form is valid', () => {
      // Given
      component.addCommentForm.setControl('type', new FormControl('Low'));
      component.addCommentForm.setControl('title', new FormControl('Test comment'));

      // When
      component.submit({ resetForm: () => { } } as FormGroupDirective);

      // Then
      expect(addCommentSpy).toHaveBeenCalled();
      expect(formResetSpy).toHaveBeenCalled();
    });

    it('should NOT add comment if form is invalid', () => {
      // Given

      // When
      component.submit({ resetForm: () => { } } as FormGroupDirective);

      // Then
      expect(addCommentSpy).toHaveBeenCalledTimes(0);
      expect(formResetSpy).toHaveBeenCalledTimes(0);
    });


  });
});
