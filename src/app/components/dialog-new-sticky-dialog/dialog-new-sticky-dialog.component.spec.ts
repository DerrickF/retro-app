import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewStickyDialogComponent } from './dialog-new-sticky-dialog.component';

describe('DialogNewStickyDialogComponent', () => {
  let component: DialogNewStickyDialogComponent;
  let fixture: ComponentFixture<DialogNewStickyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewStickyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewStickyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
