import { NgModule } from '@angular/core';
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
    MatToolbarModule,
    MatExpansionModule
} from '@angular/material'

import { FormsModule } from '@angular/forms';
import { Browser } from 'selenium-webdriver';

@NgModule({
    imports: [
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
    ],
})
export class MaterialModule { }
