import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { NewStickyDialogComponent } from './components/new-sticky-dialog/new-sticky-dialog.component';

import { MaterialModule } from './material.module';
import { CatagoryComponent } from './components/catagory/catagory.component';
import { NewCatagoryDialogComponent } from './components/new-catagory-dialog/new-catagory-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CatagoryComponent,
    NewStickyDialogComponent,
    NewCatagoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule
  ],
  entryComponents: [NewStickyDialogComponent, NewCatagoryDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
