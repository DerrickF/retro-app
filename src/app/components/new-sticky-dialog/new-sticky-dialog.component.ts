import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Sticky } from '../../models/sticky';

@Component({
  selector: 'app-new-sticky-dialog',
  templateUrl: './new-sticky-dialog.component.html',
  styleUrls: ['./new-sticky-dialog.component.css']
})
export class NewStickyDialogComponent implements OnInit {

  sticky: Sticky = { id: 0, likes: 0, text: "" }

  constructor(public dialogRef: MatDialogRef<NewStickyDialogComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({ ...this.sticky })
  }

}
