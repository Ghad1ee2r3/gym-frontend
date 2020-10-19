import {GET_BOOKINGS, SET_CLASS_BOOK, DELETE_BOOKING} from "../actions/actionTypes"

const initialState = []

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BOOKINGS:
            return action.payload
        case SET_CLASS_BOOK:
            return state.concat(action.payload)
        case DELETE_BOOKING:
            const updatedBookings = state.filter(booking => booking !== action.payload)
            return updatedBookings
        default:
            return state
    }
}

export default reducer;