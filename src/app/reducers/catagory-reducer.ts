import * as CatagoryActions from '../actions/catagory-action';
import { Catagory } from '../models/catagory';
import { Sticky } from '../models/sticky';
import { State } from '../app-state';

// Define initial state
const initialState: State = {
    loading: false,
    //catagories: catagoriesCollection
    catagories: null
};

// reducer function
export function catagoryReducer(state = initialState, action: CatagoryActions.Actions): State {
    console.log('action', action);
    console.log('current state', state);
    switch (action.type) {

        case CatagoryActions.GET_CATAGORIES: {
            return {
                ...state,
                loading: true
            }
        }

        case CatagoryActions.ADD_CATAGORY:{
            
            let newCatagories: Catagory[] = [...state.catagories, action.payload];
            
            return {...state, catagories: newCatagories, loading:true}
        }

        case CatagoryActions.SET_DEFAULT_CATAGORIES: {
            return {
                ...state,
                loading: true
            }
        }

        case CatagoryActions.GET_CATAGORIES_SUCCESS: {
            return {
                loading: false,
                catagories: action.payload
            }
        }

        default: {
            return state
        }
    }
}