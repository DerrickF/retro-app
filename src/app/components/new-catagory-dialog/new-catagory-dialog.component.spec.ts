import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatagoryDialogComponent } from './new-catagory-dialog.component';

describe('NewCatagoryDialogComponent', () => {
  let component: NewCatagoryDialogComponent;
  let fixture: ComponentFixture<NewCatagoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCatagoryDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatagoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
