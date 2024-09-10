import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User3Page } from './user3.page';

describe('User3Page', () => {
  let component: User3Page;
  let fixture: ComponentFixture<User3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(User3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
