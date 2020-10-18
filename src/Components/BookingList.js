import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
// Data
import gum from "../data";
//search component
import SearchBar from "./SearchBar";



const BookingList = props => {
    const [query, setQuery] = useState("");
  
    const filteredBooking = props.list.filter(booking =>  //filter booking list
      booking.name.toLowerCase().includes(query.toLowerCase())
    );
    const classCards = filteredBooking.map(booking => ( // send one item from list to display in card 
      <ClassCard key={booking.name} booking={booking} />
    ));
  
  return (
    <div >
        <div>
      <h3>booking list</h3>
      <SearchBar handleFilter={setQuery} />
      <div className="row">{classCards}</div>
    </div>
      
 <div >{bookingList}</div>
    </div>
  );
}

export default BookingList;





