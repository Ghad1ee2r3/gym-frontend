import instance from "./instance"
import {GET_BOOKINGS, SET_CLASS_BOOK, DELETE_BOOKING} from "./actionTypes"


export const fetchBookings = () => {
    return async dispatch => {
        try{
            const response = await instance.get("booking/")
            const bookings = response.data
            //console.log(bookings)
            dispatch({
                type: GET_BOOKINGS,
                payload: bookings,
            })
        } catch (error) {
            console.error(error)
        }
        
    }
}

export const bookClass = (classID, history) => {
    console.log(classID)
    return async dispatch => {
        try{
        const response = await instance.post(`classes/${classID}/book/`)
        const bookDetail = response.data
        dispatch(fetchBookings())
        history.push("/bookings")
        } catch (error) {
            console.error(error)
        }
        
    }
}

export const cancelBooking  = (bookingID, history) => {
    return async dispatch => {
        try{
            const response = await instance.delete(`booking/${bookingID}/cancel/`)
            dispatch(fetchBookings())
        history.push("/bookings")
        } catch (error) {
            console.error(error)
        }
    }
}