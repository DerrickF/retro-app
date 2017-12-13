import { Component, OnInit, Input } from '@angular/core';
import { Catagory } from '../../models/catagory';
import { NewStickyDialogComponent } from '../new-sticky-dialog/new-sticky-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  @Input() catagory: Catagory

  newStickyDialogRef: MatDialogRef<NewStickyDialogComponent>;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.newStickyDialogRef = this.dialog.open(NewStickyDialogComponent, {
      height: '400px',
      width: '600px'
    });
  }

  ngOnInit() {

  }

}
