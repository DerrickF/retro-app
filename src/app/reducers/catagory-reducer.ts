import * as CatagoryActions from '../actions/catagory-action';
import { Catagory } from '../models/catagory';

// Define state
export interface State {
    loading: boolean;
    catagories: Catagory[];
}

// Define initial state
const initialState: State = {
    loading: false,
    catagories: []
};

// reducer function
export function catagoryReducer(state = initialState, action: CatagoryActions.Actions): State {
    switch (action.type) {
        case CatagoryActions.GET_CATAGORIES: {
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