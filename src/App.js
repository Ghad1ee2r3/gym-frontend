import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import ListClasses from "./Components/ListClasses";
import ClassDetail from "./Components/ClassDetail";
import Signup from "./Components/SignupForm";
import Login from "./Components/LoginForm";
import BookingList from "./Components/BookingList"
import BookingDetail from "./Components/BookingDetail"
import NavBar from "./Components/navBar"
import CancelBooking from "./Components/CancelBooking"
import BookForm from "./Components/BookForm"



const App = () => (
      <div>
        < NavBar/>
        <Switch>
          <Route path="/classes/:classID">
            <ClassDetail />
          </Route>
          <Route path="/classes">
            <ListClasses />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:bookingID">
            <BookingDetail />
          </Route>
          <Route path="/bookings">
            <BookingList />
          </Route>
          <Redirect to="/classes" />
        </Switch>
      </div>
);

export default App;
