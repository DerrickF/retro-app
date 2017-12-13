import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatGridList,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material'

import { FormsModule } from '@angular/forms';
import { Browser } from 'selenium-webdriver';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
    ],
})
export class MaterialModule { }
