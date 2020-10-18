import {SET_CURRENT_USER} from "./actionTypes";
import decode from "jwt-decode"
import Cookies from "js-cookie"

import instance from "./instance";

export const login = (userData) => //, histor
    async dispatch => {
        try{
            let response = await instance.post("apilogin/", userData)
            let { token } = response.data
            dispatch(setCurrentUser(token)) 
            // fetch user bookings action
            console.log("----logedin---")
            //history.push("/")
            
        } catch (error) {
            console.error(error)
        } }

export const signup = (userData) => //,history
    async dispatch => {
        try{
            const response = await instance.post("signup/", userData)
            const { token } = response.data
            dispatch(setCurrentUser(token))
            console.log("----signedup---")
            //history.push("/")
        } catch (error) {
            console.error(error)
        }       
}

export const logout = () => setCurrentUser() // logout from server

const setUserToken = (token) => {
    if (token){
        instance.defaults.headers.Authorization = `Bearer ${token}`
        Cookies.set("token", token)
    } else {
        delete instance.defaults.headers.Authorization 
        Cookies.remove("token")
    }
    
}

const setCurrentUser = (token) => {
    setUserToken(token)
    const user = token? decode(token): null
    return ({
        type: SET_CURRENT_USER,
        payload: user
    })
}

export const checkExpiredToken = () => {
        const token = Cookies.get("token")
        if (token) {
            const currentTime = Date.now() / 1000
            const userData = decode(token)
            if (userData.exp >= currentTime){
                return setCurrentUser(token)
            }
        } 
        return setCurrentUser()
}
