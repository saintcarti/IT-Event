import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteEventPage } from './delete-event.page';

describe('DeleteEventPage', () => {
  let component: DeleteEventPage;
  let fixture: ComponentFixture<DeleteEventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
