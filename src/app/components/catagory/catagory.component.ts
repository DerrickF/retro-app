import { Component, OnInit, Input } from '@angular/core';
import { Catagory } from '../../models/catagory';
import { NewStickyDialogComponent } from '../new-sticky-dialog/new-sticky-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { item_enter_leave } from '../shared/enter-animation';
import { Sticky } from '../../models/sticky';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
  animations: [item_enter_leave]
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

    this.newStickyDialogRef.afterClosed().subscribe((result: Sticky) => {
      if (result) {
        this.catagory.stickies.push(result);
      }
    })

  }

  delete(index: number) {
    this.catagory.stickies.splice(index, 1);
  }

  ngOnInit() {

  }

}
