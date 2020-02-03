import {createStore} from "redux";
import reducer from "./redux";



// type AppStateType=ReturnType<typeof reducer>
let store=createStore(reducer);

export default store;

