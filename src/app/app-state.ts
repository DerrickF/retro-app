import { Catagory } from "./models/catagory";
import { Sticky } from "./models/sticky";

// Define state
export interface State {
    loading: boolean;
    catagories: Catagory[];
}