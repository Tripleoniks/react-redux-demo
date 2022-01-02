import { combineReducers } from "redux";
import cakeReducer from "./Redux/Cakes/cakeReducer";
import iceCreamReducer from "./Redux/iceCream/iceCreamReducer";
import userReducer from "./Redux/User/userReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer;