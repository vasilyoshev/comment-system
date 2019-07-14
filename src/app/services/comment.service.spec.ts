import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { CommentData } from '../shared/interfaces/comment.interface';

describe('CommentService', () => {
  let service;
  let mockComment = { id: '1234' };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CommentService);
    service.comments = [mockComment] as Array<CommentData>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getComment()', () => {
    it('should return comment if it is present', () => {
      // When
      const result = service.getComment('1234');

      // Then
      expect(result).toEqual(mockComment);
    });

    it('should return undefined if no comment is present', () => {
      // When
      const result = service.getComment('unexisting id');

      // Then
      expect(result).toEqual(undefined);
    });
  });

  describe('addComment()', () => {
    it('should NOT push comment if it is already present', () => {
      // Given
      const pushSpy = spyOn(service.comments, 'push');

      // When
      service.addComment(mockComment);

      // Then
      expect(pushSpy).toHaveBeenCalledTimes(0);
    });

    it('should push comment if it is not present', () => {
      // Given
      const pushSpy = spyOn(service.comments, 'push');

      // When
      service.addComment({});

      // Then
      expect(pushSpy).toHaveBeenCalled();
    });
  });

  describe('deleteComment()', () => {
    it('should splice array if comment is found by ID',() => {
      // Given
      const spliceSpy = spyOn(service.comments, 'splice');

      // When
      service.deleteComment('1234');

      // Then
      expect(spliceSpy).toHaveBeenCalledTimes(1);
    });

    it('should NOT splice array if comment is not found by ID',() => {
      // Given
      const spliceSpy = spyOn(service.comments, 'splice');

      // When
      service.deleteComment('unexisting id');

      // Then
      expect(spliceSpy).toHaveBeenCalledTimes(0);
    });
  });
});
