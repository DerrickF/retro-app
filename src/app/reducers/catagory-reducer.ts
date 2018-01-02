import * as CatagoryActions from '../actions/catagory-action';
import { Catagory } from '../models/catagory';
import { Sticky } from '../models/sticky';
import { State } from '../app-state';

//mock data
let stickyCollection: Sticky[] = [
    { id: 0, text: "Lorum ipsum sama lama ding dong day", likes: 10 },
    { id: 1, text: "Lorum ipsum sama lama ding dong day", likes: 0 },
    { id: 2, text: "Lorum ipsum sama lama ding dong day", likes: 1 },
]

const catagoriesCollection: Catagory[] = [
    { id: 0, title: "WWW", stickies: [...stickyCollection] },
    { id: 1, title: "!WWW", stickies: [...stickyCollection] },
    { id: 2, title: "Lessions Learned", stickies: [...stickyCollection] },
    { id: 3, title: "Try Next Time", stickies: [...stickyCollection] },
]

// Define initial state
const initialState: State = {
    loading: false,
    catagories: catagoriesCollection
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

        case CatagoryActions.ADD_CATAGORY: {

            let newCatagories: Catagory[] = [...state.catagories, action.payload];

            return { ...state, catagories: newCatagories, loading: true }
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