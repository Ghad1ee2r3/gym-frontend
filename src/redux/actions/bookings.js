import instance from "./instance"
import {GET_BOOKINGS} from "./actionTypes"


export const fetchBookings = (userID) => {
    return async dispatch => {
        try{
            let response = await instance.get(`http://.....bookings/${userID}`)
            let bookings = response.data
            dispatch({
                action: GET_BOOKINGS,
                payload: bookings,
            })
        } catch (error) {
            console.error(error)
        }
        
    }
}