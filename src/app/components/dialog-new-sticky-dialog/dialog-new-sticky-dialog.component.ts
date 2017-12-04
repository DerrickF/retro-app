import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-new-sticky-dialog',
  templateUrl: './dialog-new-sticky-dialog.component.html',
  styleUrls: ['./dialog-new-sticky-dialog.component.css']
})
export class DialogNewStickyDialogComponent implements OnInit {
  catagories = [
    { text: "What Went Well", value: "WWW" },
    { text: "Not So Good", value: "!WWW" },
    { text: "Learned Something New", value: "LEARN" },
    { text: "Ideas For Next Sprint", value: "IDEA" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
