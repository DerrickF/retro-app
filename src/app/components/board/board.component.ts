import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Catagory } from '../../models/catagory';
import { Sticky } from '../../models/sticky';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewCatagoryDialogComponent } from '../new-catagory-dialog/new-catagory-dialog.component';
import { Store } from '@ngrx/store';
import { State } from '../../app-state';
import * as catagoryActions from '../../actions/catagory-action'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  // stickyCollection: AngularFirestoreCollection<Sticky>;
  // stickies: Observable<Sticky[]>;

  catagories$: Observable<Catagory[]>
  newCatagoryDialogRef: MatDialogRef<NewCatagoryDialogComponent>;

  // constructor(private afs: AngularFirestore, public dialog: MatDialog) { }
  constructor(public dialog: MatDialog, private store: Store<any>) {
    this.catagories$ = store.select('catagoryState').select('catagories');
  }

  ngOnInit() {
    //this.stickyCollection = this.afs.collection('stickies');
    //this.stickies = this.stickyCollection.valueChanges();


  }
  openDialog() {
    this.newCatagoryDialogRef = this.dialog.open(NewCatagoryDialogComponent, {
      height: '400px',
      width: '600px'
    });

    this.newCatagoryDialogRef.afterClosed().subscribe((result: Catagory) => {
      if (result) {
        this.store.dispatch(new catagoryActions.AddCatagory(result));
      }
    })

  }
}
