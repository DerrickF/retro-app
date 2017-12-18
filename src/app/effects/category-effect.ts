import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as CatagoryActions from '../actions/catagory-action';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from "../components/shared/firebase.service";

@Injectable()
export class CatagoryEffects {
    @Effect() catagory$: Observable<Action> = this.actions$.ofType(CatagoryActions.GET_CATAGORIES)
        .switchMap((action: CatagoryActions.GetCatagories) =>
            this.firebaseService.getCatagories()
                .map(result => ({ type: CatagoryActions.GET_CATAGORIES_SUCCESS, payload: result }))
        );

    constructor(
        private actions$: Actions,
        private firebaseService: FirebaseService) { }
}