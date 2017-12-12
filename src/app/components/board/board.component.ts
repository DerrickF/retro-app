import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogNewStickyDialogComponent } from '../dialog-new-sticky-dialog/dialog-new-sticky-dialog.component';

interface Sticky {
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = 800;
  @Input() public height = 800;

  private cx: CanvasRenderingContext2D;
  stickyCollection: AngularFirestoreCollection<Sticky>;
  stickies: Observable<Sticky[]>;

  newStickyDialogRef: MatDialogRef<DialogNewStickyDialogComponent>;

  ngOnInit() {
    this.stickyCollection = this.afs.collection('stickies');
    this.stickies = this.stickyCollection.valueChanges();
  }

  ngAfterViewInit(): void {

  }

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  openDialog() {
    this.newStickyDialogRef = this.dialog.open(DialogNewStickyDialogComponent, {
      height: '400px',
      width: '600px'
    });
  }
}
