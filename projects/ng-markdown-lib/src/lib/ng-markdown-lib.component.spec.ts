import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMarkdownLibComponent } from './ng-markdown-lib.component';

describe('NgMarkdownLibComponent', () => {
  let component: NgMarkdownLibComponent;
  let fixture: ComponentFixture<NgMarkdownLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMarkdownLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMarkdownLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
