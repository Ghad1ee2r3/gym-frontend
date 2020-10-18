import {GET_BOOKINGS} from "../actions/actionTypes"
import instance from "../actions/instance"
const initialState = {
    bookings: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload

            }
        
        default:
            return state
    }
}

export default reducer;