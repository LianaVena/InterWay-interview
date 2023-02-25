import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCommentComponent } from './dialog-add-comment.component';

describe('DialogComponent', () => {
  let component: DialogAddCommentComponent;
  let fixture: ComponentFixture<DialogAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddCommentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
