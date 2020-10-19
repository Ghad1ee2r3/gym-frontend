import React from "react";
import { Link } from "react-router-dom";


const BookingCard = ({booking}) => {

  return (
      <div className="col-lg-4 col-md-6">
      <Link to={`/booking/${booking.id}`} className="card m-3" style={{color: "black"}}>
        <div className="card-body">
          <h5 className="card-title">
            {booking.customer}
          </h5>
          <h6 className="card-text">class: {booking.class_of} </h6>
          <small className="card-text">time: {booking.time} </small>
        </div>
      </Link>
    </div>
    
  );
};

export default BookingCard;