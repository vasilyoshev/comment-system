import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, convertToParamMap } from '@angular/router';

import { of } from 'rxjs';

import { CommentDetailsComponent } from './comment-details.component';
import { CommentComponent } from '../comment/comment.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentData } from '../../shared/interfaces/comment.interface';

describe('CommentDetailsComponent', () => {
  let component: CommentDetailsComponent;
  let fixture: ComponentFixture<CommentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentDetailsComponent,
        CommentComponent,
        CommentFormComponent
      ],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should navigate to home if component is undefined', () => {
      // Given
      component['route'] = { paramMap: of(convertToParamMap({})) } as any;
      spyOn(component['commentService'], 'getComment').and.returnValue(undefined);
      const navigateSpy = spyOn(component['router'], 'navigate');

      // When
      component.ngOnInit();

      // Then
      expect(navigateSpy).toHaveBeenCalledTimes(1);
    });

    it('should NOT navigate to home if component is defined', () => {
      // Given
      component['route'] = { paramMap: of(convertToParamMap({})) } as any;
      spyOn(component['commentService'], 'getComment').and.returnValue({} as CommentData);
      const navigateSpy = spyOn(component['router'], 'navigate');

      // When
      component.ngOnInit();

      // Then
      expect(navigateSpy).toHaveBeenCalledTimes(0);
    });
  });

  describe('ngOnDestroy()', () => {
    it('should complete onDestroy subject', () => {
      // Given
      const nextSpy = spyOn(component['onDestroy'], 'next');
      const completeSpy = spyOn(component['onDestroy'], 'complete');

      // When
      component.ngOnDestroy();

      // Then
      expect(nextSpy).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });
  });
});
