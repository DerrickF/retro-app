import { Component, OnInit } from '@angular/core';
import { Catagory } from '../../models/catagory';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-catagory-dialog',
  templateUrl: './new-catagory-dialog.component.html',
  styleUrls: ['./new-catagory-dialog.component.css']
})
export class NewCatagoryDialogComponent implements OnInit {

  catagory: Catagory = { id: 0, stickies: [{ id: 0, likes: 0, text: "Time to get started..." }], title: "" }

  constructor(public dialogRef: MatDialogRef<NewCatagoryDialogComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({ ...this.catagory });
  }

}
