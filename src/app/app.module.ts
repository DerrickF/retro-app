import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { FlexLayoutModule } from "@angular/flex-layout";

//material
import { MatButtonModule, MatDialogModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material'
import { environment } from '../environments/environment';
import { DialogNewStickyDialogComponent } from './components/dialog-new-sticky-dialog/dialog-new-sticky-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DialogNewStickyDialogComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
  ],
  entryComponents: [DialogNewStickyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
