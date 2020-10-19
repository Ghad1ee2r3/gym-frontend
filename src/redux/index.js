import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// Actions
import { checkExpiredToken, fetchBookings, fetchClasses } from "./actions"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkExpiredToken())
store.dispatch(fetchBookings())
store.dispatch(fetchClasses());

export default store;