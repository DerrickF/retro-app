import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStickyDialogComponent } from './new-sticky-dialog.component';

describe('DialogNewStickyDialogComponent', () => {
  let component: NewStickyDialogComponent;
  let fixture: ComponentFixture<NewStickyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewStickyDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStickyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
