import { Catagory } from "./models/catagory";
import { Sticky } from "./models/sticky";

export interface AppState {
    catagories: Catagory[];
    loading: boolean;
}

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

// Define state
export interface State {
    loading: boolean;
    catagories: Catagory[];
}

// Define initial state
const initialState: State = {
    loading: false,
    catagories: catagoriesCollection
};