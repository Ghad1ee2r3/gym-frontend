import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import BookingCard from "./BookingCard"
// Data
import gum from "../data";

import {connect} from "react-redux"



const BookingList = props => {
    const [query, setQuery] = useState("");
  
    const filteredBooking = props.bookings.filter(booking =>  //filter booking list
      booking.class_of.toLowerCase().includes(query.toLowerCase())
    );
    const bookingList = filteredBooking.map(booking => ( // send one item from list to display in card 
      <BookingCard key={booking.id} booking={booking} />
    ));
  
  return (
    <div className="container mt-4" style={{textAlign: "center"}}>
      <h3>My Bookings</h3>
      <div className="row">
        {bookingList}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.bookings)
  console.log("inside mapStateToProps")
  return (
    {
      bookings: state.bookings
    }
  )
}

export default connect(mapStateToProps)(BookingList);





