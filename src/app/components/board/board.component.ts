import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Catagory } from '../../models/catagory';
import { Sticky } from '../../models/sticky';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewCatagoryDialogComponent } from '../new-catagory-dialog/new-catagory-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements AfterViewInit {
  // stickyCollection: AngularFirestoreCollection<Sticky>;
  // stickies: Observable<Sticky[]>;

  stickyCollection: Sticky[] = [
    { id: 0, text: "Lorum ipsum sama lama ding dong day", likes: 10 },
    { id: 1, text: "Lorum ipsum sama lama ding dong day", likes: 0 },
    { id: 2, text: "Lorum ipsum sama lama ding dong day", likes: 1 },
  ]
  catagories: Catagory[] = [
    { id: 0, title: "WWW", stickies: this.stickyCollection },
    { id: 1, title: "!WWW", stickies: this.stickyCollection },
    { id: 2, title: "Lessions Learned", stickies: this.stickyCollection },
    { id: 3, title: "Try Next Time", stickies: this.stickyCollection },
  ]

  newCatagoryDialogRef: MatDialogRef<NewCatagoryDialogComponent>;

  ngOnInit() {
    //this.stickyCollection = this.afs.collection('stickies');
    //this.stickies = this.stickyCollection.valueChanges();
  }

  ngAfterViewInit(): void {

  }

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }


  openDialog() {
    this.newCatagoryDialogRef = this.dialog.open(NewCatagoryDialogComponent, {
      height: '400px',
      width: '600px'
    });
  }

  changeTheme() {

  }

}
