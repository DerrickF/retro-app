import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { DialogNewStickyDialogComponent } from './components/dialog-new-sticky-dialog/dialog-new-sticky-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DialogNewStickyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule
  ],
  entryComponents: [DialogNewStickyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
