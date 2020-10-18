import  bookingsReducer from "./bookings"
import classesReducer from "./classes"
import user from "./user"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    bookings: bookingsReducer,
    classes: classesReducer,
    user,
})

export default rootReducer;
