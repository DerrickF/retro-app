import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Catagory } from '../models/catagory';

export const GET_CATAGORIES = 'Get Catagories';
export const GET_CATAGORIES_SUCCESS = 'Get Catagories Success';
export const SET_DEFAULT_CATAGORIES = 'Get Default Catagories';
export const ADD_CATAGORY = 'Add catagory'

export class GetCatagories implements Action {
    readonly type = GET_CATAGORIES;
    constructor() { };
}

export class SetDefaultCatagories implements Action {
    readonly type = SET_DEFAULT_CATAGORIES;
    constructor() { };
}

export class GetCatagoriesSuccess implements Action {
    readonly type = GET_CATAGORIES_SUCCESS;
    constructor(public payload: Catagory[]) { };
}

export class AddCatagory implements Action {
    readonly type = ADD_CATAGORY; 
    constructor(public payload: Catagory){};
}

export type Actions = GetCatagories |
    GetCatagoriesSuccess|
    SetDefaultCatagories|
    AddCatagory;