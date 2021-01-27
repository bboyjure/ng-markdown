import { TestBed } from '@angular/core/testing';

import { NgMarkdownLibService } from './ng-markdown-lib.service';

describe('NgMarkdownLibService', () => {
  let service: NgMarkdownLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMarkdownLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
