import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { NewStickyDialogComponent } from './components/new-sticky-dialog/new-sticky-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { CatagoryComponent } from './components/catagory/catagory.component';
import { NewCatagoryDialogComponent } from './components/new-catagory-dialog/new-catagory-dialog.component'
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './components/shared/firebase.service';
import { EffectsModule } from '@ngrx/effects';
import { CatagoryEffects } from './effects/category-effect';

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
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    EffectsModule.forRoot([CatagoryEffects]),
    AngularFirestoreModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [NewStickyDialogComponent, NewCatagoryDialogComponent],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
