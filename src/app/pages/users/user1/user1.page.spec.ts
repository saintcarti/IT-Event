import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User1Page } from './user1.page';

describe('User1Page', () => {
  let component: User1Page;
  let fixture: ComponentFixture<User1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(User1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
