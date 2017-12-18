import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Catagory } from '../models/catagory';

export const GET_CATAGORIES = 'Get Catagories';
export const GET_CATAGORIES_SUCCESS = 'Get Catagories Success';

export class GetCatagories implements Action {
    readonly type = GET_CATAGORIES;
    constructor() { };
}
export class GetCatagoriesSuccess implements Action {
    readonly type = GET_CATAGORIES_SUCCESS;
    constructor(public payload: Catagory[]) { };
}
export type Actions = GetCatagories | GetCatagoriesSuccess;