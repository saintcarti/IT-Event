import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User2Page } from './user2.page';

describe('User2Page', () => {
  let component: User2Page;
  let fixture: ComponentFixture<User2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(User2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
